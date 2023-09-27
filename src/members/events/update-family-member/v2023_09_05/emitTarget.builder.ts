import { buildSchema } from '@sprucelabs/schema'

const updateFamilyMemberEmitTargetBuilder = buildSchema({
	id: 'updateFamilyMemberEmitTarget',
	fields: {
		familyMemberId: {
			type: 'id',
			isRequired: true,
		},
	},
})

export default updateFamilyMemberEmitTargetBuilder
