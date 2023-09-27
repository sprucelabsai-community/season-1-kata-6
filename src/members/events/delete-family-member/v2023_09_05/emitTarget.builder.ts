import { buildSchema } from '@sprucelabs/schema'

const deleteFamilyMemberEmitTargetBuilder = buildSchema({
	id: 'deleteFamilyMemberEmitTarget',
	fields: {
		familyMemberId: {
			type: 'id',
			isRequired: true,
		},
	},
})

export default deleteFamilyMemberEmitTargetBuilder
