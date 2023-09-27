import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const generateStoryEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.GenerateStoryEmitPayloadSchema  = {
	id: 'generateStoryEmitPayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'storyElements': {
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 1,
	                options: undefined
	            },
	            /** . */
	            'familyMembers': {
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 1,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(generateStoryEmitPayloadSchema)

export default generateStoryEmitPayloadSchema
