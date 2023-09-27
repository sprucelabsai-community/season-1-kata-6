import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateFamilyMemberSchema: SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberSchema  = {
	id: 'updateFamilyMember',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                options: undefined
	            },
	            /** Bio. */
	            'bio': {
	                label: 'Bio',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateFamilyMemberSchema)

export default updateFamilyMemberSchema
