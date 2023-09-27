import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const metaNotFoundSchema: SpruceErrors.Eightbitstories.MetaNotFoundSchema  = {
	id: 'metaNotFound',
	namespace: 'Eightbitstories',
	name: 'Meta not found',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(metaNotFoundSchema)

export default metaNotFoundSchema
