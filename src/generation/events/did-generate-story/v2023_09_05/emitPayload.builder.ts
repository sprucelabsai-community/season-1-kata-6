import { buildSchema } from '@sprucelabs/schema'

const didGenerateStoryEmitPayloadBuilder = buildSchema({
	id: 'didGenerateStoryEmitPayload',
	fields: {
		storyId: {
			type: 'id',
			isRequired: true,
		},
	},
})

export default didGenerateStoryEmitPayloadBuilder
