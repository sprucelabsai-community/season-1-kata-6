import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const unauthorizedAccessSchema: SpruceErrors.Eightbitstories.UnauthorizedAccessSchema  = {
	id: 'unauthorizedAccess',
	namespace: 'Eightbitstories',
	name: 'Unauthorized Access',
	    fields: {
	            /** . */
	            'youDontHaveAccessTo': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(unauthorizedAccessSchema)

export default unauthorizedAccessSchema
