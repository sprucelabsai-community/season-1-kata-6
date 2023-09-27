import {
	buttonAssert,
	interactor,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import StorySkillViewController from '../../../story/Story.svc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'
import { GetStoryTargetAndPayload } from '../../support/EventFaker'

@fake.login()
export default class StorySkillViewTest extends AbstractEightBitTest {
	private static vc: SpyStoryView
	private static storyId: string
	protected static async beforeEach() {
		await super.beforeEach()
		this.views.setController('eightbitstories.story', SpyStoryView)
		this.vc = this.views.Controller('eightbitstories.story', {}) as SpyStoryView
		this.storyId = generateId()
	}

	@test()
	protected static async rendersACard() {
		vcAssert.assertSkillViewRendersCard(this.vc, 'story')
	}

	@test()
	protected static async rendersAlertThenRedirectsIfFailsToLoadStory() {
		await eventFaker.makeEventThrow('eightbitstories.get-story::v2023_09_05')
		const alertVc = await vcAssert.assertRendersAlert(this.vc, () =>
			this.load()
		)
		await vcAssert.assertActionRedirects({
			action: () => alertVc.hide(),
			destination: {
				id: 'eightbitstories.root',
			},
			router: this.views.getRouter(),
		})
	}

	@test()
	protected static async cardRendersTheLoadedStory() {
		let passedTarget: GetStoryTargetAndPayload['target'] | undefined
		const expected = generateId()

		await this.eventFaker.fakeGetStory(({ target }) => {
			passedTarget = target
			return expected
		})

		await this.load()

		assert.isEqualDeep(passedTarget?.storyId, this.storyId)

		const content = this.getCardBody()
		assert.isEqual(content, expected)
	}

	@test()
	protected static async cardRendersExpectedButtons() {
		buttonAssert.cardRendersButtons(this.cardVc, ['done', 'again', 'share'])
	}

	@test('done redirects to root', 'done', 'eightbitstories.root')
	@test('again redirects to generate', 'again', 'eightbitstories.generate')
	protected static async clickingButtonRedirectsAsExpected(
		button: string,
		destination: string
	) {
		await this.eventFaker.fakeGetStory()
		await this.load()
		await vcAssert.assertActionRedirects({
			action: () => interactor.clickButton(this.cardVc, button),
			destination: {
				id: destination,
			},
			router: this.views.getRouter(),
		})
	}

	private static get cardVc() {
		return this.vc.getCardVc()
	}

	private static getCardBody() {
		const model = this.views.render(this.cardVc)
		const { body } = model!
		const { sections } = body!
		const firstSection = sections![0]
		const content = firstSection.text?.content
		return content
	}

	private static async load() {
		await this.views.load(this.vc, { story: this.storyId })
	}
}

class SpyStoryView extends StorySkillViewController {
	public getCardVc() {
		return this.cardVc
	}
}
