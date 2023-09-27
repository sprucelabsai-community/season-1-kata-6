import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didGenerateStoryEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitPayloadSchema  = {
	id: 'didGenerateStoryEmitPayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'storyId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didGenerateStoryEmitPayloadSchema)

export default didGenerateStoryEmitPayloadSchema
