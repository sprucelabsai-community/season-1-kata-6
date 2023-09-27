import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateFamilyMemberEmitTargetSchema: SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitTargetSchema  = {
	id: 'updateFamilyMemberEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(updateFamilyMemberEmitTargetSchema)

export default updateFamilyMemberEmitTargetSchema
