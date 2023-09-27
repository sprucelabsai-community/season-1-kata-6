import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse => {
	const { generator, payload, source } = event
	const { familyMembers, storyElements } = payload

	await generator.generate({
		familyMemberIds: familyMembers,
		storyElementIds: storyElements,
		personId: source.personId!,
	})
}

type EmitPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.GenerateStoryEmitTargetAndPayload
