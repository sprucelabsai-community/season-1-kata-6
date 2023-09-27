import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { source, target, family, payload } = event
	const { personId } = source
	const { familyMemberId } = target
	const { familyMember } = payload

	await family.updateMember(personId!, familyMemberId, familyMember)

	return {
		familyMember: {
			id: 'aoeu',
			bio: 'aoeu',
			name: 'aoeu',
		},
	}
}

type EmitPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitTargetAndPayload

type ResponsePayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberResponsePayload
