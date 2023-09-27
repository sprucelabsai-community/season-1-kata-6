import { buildSchema } from '@sprucelabs/schema'

const didGenerateStoryEmitTargetBuilder = buildSchema({
	id: 'didGenerateStoryEmitTarget',
	fields: {
		personId: {
			type: 'id',
			isRequired: true,
		},
	},
})

export default didGenerateStoryEmitTargetBuilder
