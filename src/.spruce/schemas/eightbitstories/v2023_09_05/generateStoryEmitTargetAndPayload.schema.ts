import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import generateStoryEmitPayloadSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/generateStoryEmitPayload.schema'

const generateStoryEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.GenerateStoryEmitTargetAndPayloadSchema  = {
	id: 'generateStoryEmitTargetAndPayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: generateStoryEmitPayloadSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(generateStoryEmitTargetAndPayloadSchema)

export default generateStoryEmitTargetAndPayloadSchema
