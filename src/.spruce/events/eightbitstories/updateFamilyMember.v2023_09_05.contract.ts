import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import updateFamilyMemberEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/updateFamilyMemberEmitTargetAndPayload.schema'
import updateFamilyMemberResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/updateFamilyMemberResponsePayload.schema'

const updateFamilyMemberEventContract = buildEventContract({
	eventSignatures: {
		'eightbitstories.update-family-member::v2023_09_05': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'eightbitstories.eight-bit-stories',
				permissionIdsAny: ['can-manage-family-members'],
			},

			emitPayloadSchema: updateFamilyMemberEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateFamilyMemberResponsePayloadSchema,
		},
	},
})
export default updateFamilyMemberEventContract

export type UpdateFamilyMemberEventContract =
	typeof updateFamilyMemberEventContract
