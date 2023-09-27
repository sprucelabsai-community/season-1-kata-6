import { buildSchema, dropFields, makeFieldsOptional } from '@sprucelabs/schema'
import familyMemberBuilder from '../../../../schemas/v2023_09_05/familyMember.builder'

const updateFamilyMemberEmitPayloadBuilder = buildSchema({
	id: 'updateFamilyMemberEmitPayload',
	fields: {
		familyMember: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: buildSchema({
					id: 'updateFamilyMember',
					fields: makeFieldsOptional(
						dropFields(familyMemberBuilder.fields, ['id', 'target'])
					),
				}),
			},
		},
	},
})

export default updateFamilyMemberEmitPayloadBuilder
