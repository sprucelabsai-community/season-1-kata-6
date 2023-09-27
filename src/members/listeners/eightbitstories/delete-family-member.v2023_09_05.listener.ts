import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { family, target, source } = event
	const { familyMemberId } = target
	const { personId } = source

	await family.deleteMember(personId!, familyMemberId)

	return {
		success: true,
	}
}

type EmitPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberEmitTargetAndPayload

type ResponsePayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberResponsePayload
