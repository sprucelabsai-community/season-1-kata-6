import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent
): SpruceEventResponse<ResponsePayload> => {
	const { source, family } = event

	const all = await family.listMembers(source.personId!)

	return {
		familyMembers: all,
	}
}

type ResponsePayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.ListFamilyMembersResponsePayload
