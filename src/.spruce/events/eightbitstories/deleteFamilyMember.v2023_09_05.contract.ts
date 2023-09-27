import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import deleteFamilyMemberEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/deleteFamilyMemberEmitTargetAndPayload.schema'
import deleteFamilyMemberResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/deleteFamilyMemberResponsePayload.schema'

const deleteFamilyMemberEventContract = buildEventContract({
	eventSignatures: {
		'eightbitstories.delete-family-member::v2023_09_05': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'eightbitstories.eight-bit-stories',
				permissionIdsAny: ['can-manage-family-members'],
			},

			emitPayloadSchema: deleteFamilyMemberEmitTargetAndPayloadSchema,
			responsePayloadSchema: deleteFamilyMemberResponsePayloadSchema,
		},
	},
})
export default deleteFamilyMemberEventContract

export type DeleteFamilyMemberEventContract =
	typeof deleteFamilyMemberEventContract
