import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const familyMemberTargetSchema: SpruceSchemas.Eightbitstories.v2023_09_05.FamilyMemberTargetSchema  = {
	id: 'familyMemberTarget',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(familyMemberTargetSchema)

export default familyMemberTargetSchema
