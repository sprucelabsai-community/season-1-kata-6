import { buildErrorSchema } from '@sprucelabs/schema'

export default buildErrorSchema({
	id: 'unauthorizedAccess',
	name: 'Unauthorized Access',
	fields: {
		youDontHaveAccessTo: {
			type: 'text',
			isRequired: true,
		},
	},
})
