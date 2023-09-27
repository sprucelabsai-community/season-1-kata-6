import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import getStoryEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/getStoryEmitTargetAndPayload.schema'
import getStoryResponsePayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/getStoryResponsePayload.schema'

const getStoryEventContract = buildEventContract({
	eventSignatures: {
		'eightbitstories.get-story::v2023_09_05': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'eightbitstories.eight-bit-stories',
				permissionIdsAny: ['can-read-story'],
			},

			emitPayloadSchema: getStoryEmitTargetAndPayloadSchema,
			responsePayloadSchema: getStoryResponsePayloadSchema,
		},
	},
})
export default getStoryEventContract

export type GetStoryEventContract = typeof getStoryEventContract
