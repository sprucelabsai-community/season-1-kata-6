import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { assert } from '@sprucelabs/test-utils'
import FamilyMembersStore from '../../members/FamilyMembers.store'
import MetaStore from '../../meta/Meta.store'
import StoriesStore from '../../story/Stories.store'
import EventFaker from './EventFaker'

export default abstract class AbstractEightBitTest extends AbstractSpruceFixtureTest {
	protected static eventFaker: EventFaker
	protected static metas: MetaStore
	protected static members: FamilyMembersStore
	protected static stories: StoriesStore

	protected static async beforeEach() {
		await super.beforeEach()
		this.eventFaker = new EventFaker()
		this.metas = await this.stores.getStore('meta')
		this.members = await this.stores.getStore('familyMembers')
		this.stories = await this.stores.getStore('stories')
	}

	public static async getSecondFamilyMember() {
		const all = await this.members.find({})
		return all[1]
	}

	protected static async getFirstFamilyMember(
		options: { shouldIncludePrivateFields?: boolean } = {}
	) {
		const { shouldIncludePrivateFields } = options
		const match = await this.members.findOne(
			{},
			{ shouldIncludePrivateFields: shouldIncludePrivateFields ?? true }
		)
		assert.isTruthy(
			match,
			`You gotta @seed('familyMembers', 1) to get your first family member`
		)

		return match
	}

	protected static async getFirstGeneratedStory() {
		const story = await this.stories.findOne({})
		assert.isTruthy(story)
		return story
	}
}
