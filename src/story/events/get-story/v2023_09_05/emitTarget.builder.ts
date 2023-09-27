import { buildSchema } from '@sprucelabs/schema'

const getStoryEmitTargetBuilder = buildSchema({
	id: 'getStoryEmitTarget',
	fields: {
		storyId: {
			type: 'id',
			isRequired: true,
		},
	},
})

export default getStoryEmitTargetBuilder
