import { buildSchema, dropFields } from '@sprucelabs/schema'
import familyMemberBuilder from '../../../../schemas/v2023_09_05/familyMember.builder'

const addFamilyMemberEmitPayloadBuilder = buildSchema({
	id: 'addFamilyMemberEmitPayload',
	fields: {
		familyMember: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: buildSchema({
					id: 'addFamilyMember',
					fields: dropFields(familyMemberBuilder.fields, ['id', 'target']),
				}),
			},
		},
	},
})

export default addFamilyMemberEmitPayloadBuilder
