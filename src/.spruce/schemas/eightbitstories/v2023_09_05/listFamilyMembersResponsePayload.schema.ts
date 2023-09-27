import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import publicFamilyMemberSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/publicFamilyMember.schema'

const listFamilyMembersResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.ListFamilyMembersResponsePayloadSchema  = {
	id: 'listFamilyMembersResponsePayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'familyMembers': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: publicFamilyMemberSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listFamilyMembersResponsePayloadSchema)

export default listFamilyMembersResponsePayloadSchema
