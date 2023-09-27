import { buildSchema } from '@sprucelabs/schema'

const deleteFamilyMemberResponsePayloadBuilder = buildSchema({
	id: 'deleteFamilyMemberResponsePayload',
	fields: {
		success: {
			type: 'boolean',
			isRequired: true,
		},
	},
})

export default deleteFamilyMemberResponsePayloadBuilder
