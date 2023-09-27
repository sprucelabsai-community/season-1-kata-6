import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import publicFamilyMemberSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/publicFamilyMember.schema'

const updateFamilyMemberResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberResponsePayloadSchema  = {
	id: 'updateFamilyMemberResponsePayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMember': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: publicFamilyMemberSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateFamilyMemberResponsePayloadSchema)

export default updateFamilyMemberResponsePayloadSchema
