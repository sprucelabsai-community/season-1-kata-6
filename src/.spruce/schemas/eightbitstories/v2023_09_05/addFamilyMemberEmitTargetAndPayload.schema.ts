import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import addFamilyMemberEmitPayloadSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/addFamilyMemberEmitPayload.schema'

const addFamilyMemberEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberEmitTargetAndPayloadSchema  = {
	id: 'addFamilyMemberEmitTargetAndPayload',
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
	                options: {schema: addFamilyMemberEmitPayloadSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addFamilyMemberEmitTargetAndPayloadSchema)

export default addFamilyMemberEmitTargetAndPayloadSchema
