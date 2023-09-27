import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, generateId, assert } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class GetStoryListenerTest extends AbstractEightBitTest {
	protected static async beforeEach(): Promise<void> {
		await super.beforeEach()
		await this.bootSkill()
	}

	@test()
	@seed('stories', 1)
	protected static async loadsTheFirstStory() {
		const firstStory = await this.getFirstGeneratedStory()
		const match = await this.emitGetStory(firstStory.id)
		assert.isEqual(match, firstStory.body)
	}

	@test()
	@seed('stories', 2)
	protected static async canTellStoriesApart() {
		const [, secondStory] = await this.stories.find({})
		const match = await this.emitGetStory(secondStory.id)
		assert.isEqual(match, secondStory.body)
	}

	private static async emitGetStory(storyId: string) {
		const [{ body }] = await this.fakedClient.emitAndFlattenResponses(
			'eightbitstories.get-story::v2023_09_05',
			{
				target: {
					storyId,
				},
			}
		)
		return body
	}
}
