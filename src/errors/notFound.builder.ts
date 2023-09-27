import { buildErrorSchema } from '@sprucelabs/schema'

export default buildErrorSchema({
	id: 'notFound',
	name: 'Not found',
	fields: {},
})
