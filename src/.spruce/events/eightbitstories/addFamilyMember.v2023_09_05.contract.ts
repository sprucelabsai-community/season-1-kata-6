import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import addFamilyMemberEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/addFamilyMemberEmitTargetAndPayload.schema'
import addFamilyMemberResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/addFamilyMemberResponsePayload.schema'

const addFamilyMemberEventContract = buildEventContract({
	eventSignatures: {
		'eightbitstories.add-family-member::v2023_09_05': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'eightbitstories.eight-bit-stories',
				permissionIdsAny: ['can-manage-family-members'],
			},

			emitPayloadSchema: addFamilyMemberEmitTargetAndPayloadSchema,
			responsePayloadSchema: addFamilyMemberResponsePayloadSchema,
		},
	},
})
export default addFamilyMemberEventContract

export type AddFamilyMemberEventContract = typeof addFamilyMemberEventContract
