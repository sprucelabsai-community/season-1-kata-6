import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const storySourceSchema: SpruceSchemas.Eightbitstories.v2023_09_05.StorySourceSchema  = {
	id: 'storySource',
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

SchemaRegistry.getInstance().trackSchema(storySourceSchema)

export default storySourceSchema
