import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import familyMemberTargetSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/familyMemberTarget.schema'

const familyMemberSchema: SpruceSchemas.Eightbitstories.v2023_09_05.FamilyMemberSchema  = {
	id: 'familyMember',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: 'Family member',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Bio. */
	            'bio': {
	                label: 'Bio',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isPrivate: true,
	                isRequired: true,
	                options: {schema: familyMemberTargetSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(familyMemberSchema)

export default familyMemberSchema
