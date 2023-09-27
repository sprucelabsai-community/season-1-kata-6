import { eventFaker, fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import OpenAI from 'openai'
import {
	ChatCompletion,
	ChatCompletionCreateParamsBase,
} from 'openai/resources/chat/completions'
import { PublicMeta, StoryElement } from '../../../eightbitstories.types'
import PromptGenerator from '../../../generation/PromptGenerator'
import { storyElements } from '../../../generation/storyElements'
import { StoryGeneratorImpl } from '../../../generation/StoryGenerator'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import { DidGenerateTargetAndPayload } from '../../support/EventFaker'

@fake.login()
export default class StoryGeneratorTest extends AbstractEightBitTest {
	private static generator: SpyGenerator
	private static passedOptions: ChatCompletionCreateParamsBase | undefined
	private static prompt: PromptGenerator
	private static responseBody = generateId()

	protected static async beforeEach() {
		await super.beforeEach()
		this.generator = (await StoryGeneratorImpl.Generator({
			stores: this.stores,
			Class: SpyGenerator,
			client: this.fakedClient,
		})) as SpyGenerator

		await eventFaker.handleReactiveEvent(
			'eightbitstories.did-generate-story::v2023_09_05'
		)

		this.passedOptions = undefined
		this.prompt = PromptGenerator.Generator()

		const choice: ChatCompletion.Choice = {
			finish_reason: 'stop',
			index: 0,
			message: {
				content: this.responseBody,
				role: 'assistant',
			},
		}

		//@ts-ignore
		this.generator.openai.chat.completions.create = (
			options: ChatCompletionCreateParamsBase
		) => {
			this.passedOptions = options
			return {
				choices: [choice],
				controller: {},
				id: 'aoeu',
			}
		}
	}

	@test()
	protected static async throwsWithMissing() {
		const err = await assert.doesThrowAsync(() =>
			//@ts-ignore
			StoryGeneratorImpl.Generator()
		)
		errorAssert.assertError(err, 'MISSING_PARAMETERS', {
			parameters: ['stores', 'client'],
		})
	}

	@test()
	protected static async setsOpenAiOnClass() {
		assert.isInstanceOf(this.generator.getApi(), OpenAI)
	}

	@test()
	@seed('meta')
	protected static async generateReachesOutToOpenAi() {
		await this.generate()

		const messages = this.passedOptions?.messages

		assert.isTruthy(this.passedOptions)
		assert.isEqual(this.passedOptions?.model, 'gpt-3.5-turbo')
		assert.isLength(messages, 2)

		const firstMessage = messages?.[0]
		assert.isEqual(firstMessage?.role, 'system')

		const secondMessage = messages?.[1]
		assert.isEqual(secondMessage?.role, 'user')
		assert.isEqual(
			secondMessage?.content,
			`Please write a 10 minute bedtime story!`
		)
	}

	@test()
	@seed('familyMembers', 3)
	@seed('meta')
	protected static async passesExpectedPromptAsSystemMessage() {
		await this.assertSendsExpectedPrompt()
	}

	@test()
	@seed('familyMembers', 1)
	@seed('meta')
	protected static async filtersMetaByPerson() {
		//@ts-ignore
		await this.metas.update({}, { 'target.personId': generateId() })
		const meta = await this.metas.createOne({
			name: generateId(),
			values: generateId(),
			target: {
				personId: this.fakedPerson.id,
			},
		})

		await this.assertSendsExpectedPrompt({
			meta,
		})
	}

	@test()
	@seed('familyMembers', 5)
	@seed('meta')
	protected static async onlyLoadsPassedMembers() {
		const members = await this.members.find({})
		const ids = [members[0].id, members[3].id]

		await this.assertSendsExpectedPrompt({
			familyMemberIds: ids,
		})
	}

	@test()
	@seed('familyMembers', 5)
	@seed('meta')
	protected static async usesPassedStoryElements() {
		await this.assertSendsExpectedPrompt({
			storeElementIds: [storyElements[1].id, storyElements[2].id],
		})
	}

	@test()
	protected static async throwsErrorIfNoMetaFound() {
		const err = await assert.doesThrowAsync(() => this.generate())
		errorAssert.assertError(err, 'META_NOT_FOUND')
	}

	@test()
	@seed('familyMembers', 5)
	@seed('meta')
	protected static async writesStoreRecord() {
		await this.generate()

		const count = await this.stories.count()
		assert.isEqual(count, 1)
	}

	@test()
	@seed('familyMembers', 5)
	@seed('meta')
	protected static async writesStoreRecordWithExpectedValues() {
		const dateCreatedFloor = new Date().getTime()
		await this.wait(1)

		await this.generate()
		const story = await this.getGeneratedStory()
		assert.isEqual(story.source.personId, this.fakedPerson.id)

		const dateCreatedCeiling = new Date().getTime()

		assert.isAbove(story.dateGenerated, dateCreatedFloor)
		assert.isBelow(story.dateGenerated, dateCreatedCeiling)

		assert.isEqual(story.body, this.responseBody)
	}

	@test()
	@seed('familyMembers', 5)
	@seed('meta')
	protected static async generateReturnsStoredRecord() {
		const generated = await this.generate()
		const story = await this.getGeneratedStory()
		assert.doesInclude(story, generated)
	}

	@test()
	@seed('familyMembers', 5)
	@seed('meta')
	protected static async emitsDidGenerateAfterGenerating() {
		let wasHit = false
		let passedTarget: DidGenerateTargetAndPayload['target'] | undefined
		let passedPayload: DidGenerateTargetAndPayload['payload'] | undefined

		await this.eventFaker.fakeDidGenerateStory(({ target, payload }) => {
			wasHit = true
			passedTarget = target
			passedPayload = payload
		})

		await this.generate()

		assert.isTrue(wasHit)
		assert.isEqualDeep(passedTarget, {
			personId: this.fakedPerson.id,
		})

		const story = await this.getFirstGeneratedStory()

		assert.isEqualDeep(passedPayload, {
			storyId: story.id,
		})
	}

	private static async getGeneratedStory() {
		const match = await this.stories.findOne(
			{},
			{ shouldIncludePrivateFields: true }
		)
		assert.isTruthy(match)
		return match
	}

	private static async assertSendsExpectedPrompt(options?: {
		meta?: PublicMeta
		familyMemberIds?: string[]
		storeElementIds?: string[]
	}) {
		const {
			meta: metaOptions,
			familyMemberIds: familyMemberIds,
			storeElementIds,
		} = options ?? {}

		const meta = metaOptions ?? (await this.metas.findOne({}))
		assert.isTruthy(meta)

		const members = await this.loadFamilyMembers(familyMemberIds)
		const expected = this.prompt.generate({
			familyMembers: members,
			familyName: meta.name,
			familyValues: meta.values,
			storyElements: this.getStoryElementIds(storeElementIds),
		})

		await this.generate({
			familyMemberIds,
			storeElementIds,
		})

		assert.isEqual(this.passedOptions?.messages[0]?.content, expected)
	}

	private static getStoryElementIds(ids?: string[]): StoryElement[] {
		if (ids) {
			return storyElements.filter((e) => ids.includes(e.id))
		}

		return [storyElements[0]]
	}

	private static async loadFamilyMembers(
		familyMemberIds: string[] | undefined
	) {
		let membersQuery = {}
		if (familyMemberIds) {
			membersQuery = {
				id: {
					$in: familyMemberIds,
				},
			}
		}
		const members = await this.members.find(membersQuery)
		return members
	}

	private static async generate(options?: {
		familyMemberIds?: string[]
		storeElementIds?: string[]
	}) {
		const { familyMemberIds: familyMemberIds, storeElementIds } = options ?? {}
		const members = await this.loadFamilyMembers(familyMemberIds)

		return await this.generator.generate({
			familyMemberIds: members.map((m) => m.id),
			personId: this.fakedPerson.id,
			storyElementIds: storeElementIds ?? [storyElements[0].id],
		})
	}
}

class SpyGenerator extends StoryGeneratorImpl {
	public getApi() {
		return this.openai
	}
}
