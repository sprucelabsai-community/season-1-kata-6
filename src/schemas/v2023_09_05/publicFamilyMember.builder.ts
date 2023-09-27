import { buildSchema, dropPrivateFields } from '@sprucelabs/schema'
import familyMemberBuilder from './familyMember.builder'

export default buildSchema({
	id: 'publicFamilyMember',
	name: 'Public family member',
	fields: {
		...dropPrivateFields(familyMemberBuilder.fields),
	},
})
