import { buildSchema } from '@sprucelabs/schema'

const getStoryResponsePayloadBuilder = buildSchema({
	id: 'getStoryResponsePayload',
	fields: {
		body: {
			type: 'text',
			isRequired: true,
		},
	},
})

export default getStoryResponsePayloadBuilder
