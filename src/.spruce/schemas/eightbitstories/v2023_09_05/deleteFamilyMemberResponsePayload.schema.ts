import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteFamilyMemberResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberResponsePayloadSchema  = {
	id: 'deleteFamilyMemberResponsePayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'success': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteFamilyMemberResponsePayloadSchema)

export default deleteFamilyMemberResponsePayloadSchema
