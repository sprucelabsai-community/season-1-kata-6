import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updateFamilyMemberSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/updateFamilyMember.schema'

const updateFamilyMemberEmitPayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitPayloadSchema  = {
	id: 'updateFamilyMemberEmitPayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMember': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateFamilyMemberSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateFamilyMemberEmitPayloadSchema)

export default updateFamilyMemberEmitPayloadSchema
