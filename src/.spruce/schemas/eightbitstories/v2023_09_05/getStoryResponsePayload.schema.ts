import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getStoryResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryResponsePayloadSchema  = {
	id: 'getStoryResponsePayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'body': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getStoryResponsePayloadSchema)

export default getStoryResponsePayloadSchema
