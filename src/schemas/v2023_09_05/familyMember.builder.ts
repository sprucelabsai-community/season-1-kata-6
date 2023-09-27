import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'familyMember',
	name: 'Family member',
	fields: {
		id: {
			type: 'id',
			isRequired: true,
		},
		name: {
			type: 'text',
			label: 'Name',
			isRequired: true,
		},
		bio: {
			type: 'text',
			label: 'Bio',
			isRequired: true,
		},
		target: {
			type: 'schema',
			isRequired: true,
			isPrivate: true,
			options: {
				schema: buildSchema({
					id: 'familyMemberTarget',
					fields: {
						personId: {
							type: 'id',
							isRequired: true,
						},
					},
				}),
			},
		},
	},
})
