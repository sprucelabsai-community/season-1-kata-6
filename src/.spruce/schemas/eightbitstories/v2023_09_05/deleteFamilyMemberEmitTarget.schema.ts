import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteFamilyMemberEmitTargetSchema: SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberEmitTargetSchema  = {
	id: 'deleteFamilyMemberEmitTarget',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMemberId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteFamilyMemberEmitTargetSchema)

export default deleteFamilyMemberEmitTargetSchema
