import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { payload, source, family } = event
	const { familyMember } = payload

	const created = await family.addMember(source.personId!, familyMember)

	return {
		familyMember: created,
	}
}

type EmitPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberEmitTargetAndPayload

type ResponsePayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberResponsePayload
