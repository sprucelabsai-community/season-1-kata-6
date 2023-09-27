import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import { INTRO } from '../../../generation/constants'
import PromptGenerator, {
	GeneratePromptOptions,
} from '../../../generation/PromptGenerator'
import { storyElements } from '../../../generation/storyElements'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class PromptGeneratorTest extends AbstractEightBitTest {
	private static prompt: PromptGenerator
	private static promptOptions: GeneratePromptOptions

	protected static async beforeEach() {
		await super.beforeEach()
		this.prompt = PromptGenerator.Generator()
		assert.isInstanceOf(this.prompt, PromptGenerator)
		this.promptOptions = {
			familyMembers: [
				{
					bio: generateId(),
					name: generateId(),
				},
			],
			familyValues: generateId(),
			familyName: generateId(),
			storyElements: [
				{
					description: generateId(),
					id: generateId(),
					name: generateId(),
				},
			],
		}
	}

	@test()
	protected static async throwsWhenMissingExpected() {
		//@ts-ignore
		const err = assert.doesThrow(() => this.prompt.generate())
		errorAssert.assertError(err, 'MISSING_PARAMETERS', {
			parameters: [
				'familyMembers',
				'familyValues',
				'familyName',
				'storyElements',
			],
		})
	}

	@test()
	protected static async generatesWithExpected() {
		this.generate()
	}

	@test()
	protected static async generatesExpectedPromptFromOneMemberAndOneElement() {
		const actual = this.generate()
		const expected = this.generateExpectedPrompt()

		function removeSpaces(str: string) {
			return str.replace(/\s/g, '')
		}

		assert.isEqual(removeSpaces(actual), removeSpaces(expected.trim()))
	}

	@test()
	protected static async testGenerations() {
		this.promptOptions.familyMembers = [
			{
				name: 'Tay',
				bio: 'A dad that really gives an f***',
			},
			{
				name: 'Junie',
				bio: 'Oldest daughter. 6 years old. Loves unicorns!',
			},
			{
				name: 'Cloe',
				bio: 'Youngest daughter. 4 years old. Loves dinosaurs!',
			},
		]

		this.promptOptions.familyName = 'Romero'
		this.promptOptions.familyValues = `A Romero never gives up, but knows when to pivot.\nA Romero always tries their best!`
		this.promptOptions.storyElements = [storyElements[0], storyElements[9]]
		const prompt = this.generate()
		this.log('Prompt:', prompt)
	}

	private static generateExpectedPrompt() {
		return (
			INTRO +
			`


Family Name:

The ${this.promptOptions.familyName}s


Family Values:

${this.promptOptions.familyValues}


Family Members:

${this.promptOptions.familyMembers
	.map((member) => 'Name: ' + member.name + '\n' + 'Bio: ' + member.bio)
	.join('\n\n')}


Desired Story Elements: 

${this.promptOptions.storyElements
	.map((element) => element.name + ':' + element.description)
	.join('\n\n')}


Duration:

10 minutes
`
		)
	}

	private static generate() {
		const prompt = this.prompt.generate(this.promptOptions)

		return prompt
	}
}
