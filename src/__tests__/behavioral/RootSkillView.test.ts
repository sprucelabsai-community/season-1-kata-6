import {
	buttonAssert,
	interactor,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import RootSkillViewController from '../../skillViewControllers/Root.svc'

export default class RootSkillViewTest extends AbstractSpruceFixtureTest {
	private static vc: SpyRootSkillView

	protected static async beforeEach() {
		await super.beforeEach()

		this.views.setController('eightbitstories.root', SpyRootSkillView)
		this.vc = this.views.Controller(
			'eightbitstories.root',
			{}
		) as SpyRootSkillView

		await this.load()
	}

	@test()
	protected static rendersCard() {
		vcAssert.assertSkillViewRendersCard(this.vc, 'controls')
	}

	@test()
	protected static rendersExpectedButtons() {
		buttonAssert.cardRendersButtons(this.cardVc, [
			'meta',
			'members',
			'generate',
		])
	}

	@test()
	protected static async clickingMetaRedirectsToMetaSkillView() {
		await this.assertClickingButtonRedirects('meta', 'eightbitstories.meta')
	}

	@test()
	protected static async clickingMembersRedirectsToMembersSkillView() {
		await this.assertClickingButtonRedirects(
			'members',
			'eightbitstories.members'
		)
	}

	@test()
	protected static async clickingGenerateRedirectsToGenerateSkillView() {
		await this.assertClickingButtonRedirects(
			'generate',
			'eightbitstories.generate'
		)
	}

	private static async assertClickingButtonRedirects(
		button: string,
		destination: string
	) {
		await vcAssert.assertActionRedirects({
			action: () => interactor.clickButton(this.cardVc, button),
			router: this.views.getRouter(),
			destination: {
				id: destination,
			},
		})
	}

	private static async load() {
		await this.views.load(this.vc)
	}

	private static get cardVc() {
		return this.vc.getCardVc()
	}
}

class SpyRootSkillView extends RootSkillViewController {
	public getCardVc() {
		return this.cardVc
	}
}
