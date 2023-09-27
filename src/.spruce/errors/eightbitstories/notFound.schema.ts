import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const notFoundSchema: SpruceErrors.Eightbitstories.NotFoundSchema  = {
	id: 'notFound',
	namespace: 'Eightbitstories',
	name: 'Not found',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(notFoundSchema)

export default notFoundSchema
