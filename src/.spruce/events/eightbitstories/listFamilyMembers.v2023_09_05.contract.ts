import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import listFamilyMembersResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/listFamilyMembersResponsePayload.schema'

const listFamilyMembersEventContract = buildEventContract({
	eventSignatures: {
		'eightbitstories.list-family-members::v2023_09_05': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'eightbitstories.eight-bit-stories',
				permissionIdsAny: ['can-manage-family-members'],
			},

			responsePayloadSchema: listFamilyMembersResponsePayloadSchema,
		},
	},
})
export default listFamilyMembersEventContract

export type ListFamilyMembersEventContract =
	typeof listFamilyMembersEventContract
