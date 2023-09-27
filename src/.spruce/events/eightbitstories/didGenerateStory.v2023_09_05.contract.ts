import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didGenerateStoryEmitTargetAndPayloadSchema from '#spruce/schemas/eightbitstories/v2023_09_05/didGenerateStoryEmitTargetAndPayload.schema'

const didGenerateStoryEventContract = buildEventContract({
	eventSignatures: {
		'eightbitstories.did-generate-story::v2023_09_05': {
			isGlobal: true,

			listenPermissions: {
				contractId: 'eightbitstories.eight-bit-stories',
				permissionIdsAny: ['can-generate-story'],
			},
			emitPayloadSchema: didGenerateStoryEmitTargetAndPayloadSchema,
		},
	},
})
export default didGenerateStoryEventContract

export type DidGenerateStoryEventContract = typeof didGenerateStoryEventContract
