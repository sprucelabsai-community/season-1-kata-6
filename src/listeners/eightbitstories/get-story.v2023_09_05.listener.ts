import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { stores, target } = event
	const { storyId } = target

	const stories = await stores.getStore('stories')
	const story = await stories.findOne({ id: storyId })
	return {
		body: story!.body,
	}
}

type EmitPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryEmitTargetAndPayload

type ResponsePayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryResponsePayload
