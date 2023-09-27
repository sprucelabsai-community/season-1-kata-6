import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import addFamilyMemberSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/addFamilyMember.schema'

const addFamilyMemberEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberEmitPayloadSchema  = {
	id: 'addFamilyMemberEmitPayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMember': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: addFamilyMemberSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addFamilyMemberEmitPayloadSchema)

export default addFamilyMemberEmitPayloadSchema
