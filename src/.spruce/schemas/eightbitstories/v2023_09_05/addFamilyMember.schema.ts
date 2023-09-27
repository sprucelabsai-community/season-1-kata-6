import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const addFamilyMemberSchema: SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberSchema  = {
	id: 'addFamilyMember',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Bio. */
	            'bio': {
	                label: 'Bio',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addFamilyMemberSchema)

export default addFamilyMemberSchema
