/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'
import { SkillViewControllerId } from '@sprucelabs/heartwood-view-controllers'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitTarget {
			
				
				'personId': string
		}

		interface DidRegisterSkillViewsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidRegisterSkillViewsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitPayload {
			
				/** View namespace. */
				'namespace': string
		}

		interface DidRegisterSkillViewsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** View namespace. */
			            'namespace': {
			                label: 'View namespace',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidRegisterSkillViewsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTarget
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayload
		}

		interface DidRegisterSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayloadSchema,}
			            },
			    }
		}

		interface DidRegisterSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitTarget {
			
				/** Skill View Id. */
				'skillViewId'?: (SkillViewControllerId)| undefined | null
		}

		interface GenerateUrlEmitTargetSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			importsWhenRemote: ['import { SkillViewControllerId } from \'@sprucelabs/heartwood-view-controllers\'',],
			    fields: {
			            /** Skill View Id. */
			            'skillViewId': {
			                label: 'Skill View Id',
			                type: 'raw',
			                options: {valueType: `SkillViewControllerId`,}
			            },
			    }
		}

		interface GenerateUrlEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitPayload {
			
				/** Load args. */
				'args'?: (Record<string, any>)| undefined | null
		}

		interface GenerateUrlEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Load args. */
			            'args': {
			                label: 'Load args',
			                type: 'raw',
			                options: {valueType: `Record<string, any>`,}
			            },
			    }
		}

		interface GenerateUrlEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayload| undefined | null
		}

		interface GenerateUrlEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayloadSchema,}
			            },
			    }
		}

		interface GenerateUrlEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlResponsePayload {
			
				/** Url. */
				'url': string
		}

		interface GenerateUrlResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Url. */
			            'url': {
			                label: 'Url',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GenerateUrlResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeEmitTarget {
			
				
				'organizationId': string
		}

		interface GetActiveThemeEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetActiveThemeEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTarget
		}

		interface GetActiveThemeEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetSchema,}
			            },
			    }
		}

		interface GetActiveThemeEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeResponsePayload {
			
				
				'theme'?: SpruceSchemas.Heartwood.v2021_02_11.Theme| undefined | null
		}

		interface GetActiveThemeResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface GetActiveThemeResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetViewControllersEmitTarget {
			
				
				'namespace': string
		}

		interface GetViewControllersEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getViewControllersEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'namespace': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetViewControllersEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTarget
		}

		interface GetSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTargetSchema,}
			            },
			    }
		}

		interface GetSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsResponsePayload {
			
				
				'id': string
				
				'ids': string[]
				
				'source'?: string| undefined | null
				
				'sourceUrl'?: string| undefined | null
				
				'theme'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Theme| undefined | null
		}

		interface GetSkillViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'ids': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'sourceUrl': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface GetSkillViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface ListViewsResult {
			
				
				'namespace': string
				/** Skill view ids. For now this is every view, but soon will be only skill views */
				'svcIds': string[]
				/** View ids. For now this is every view, but soon will be only views (not skill views) */
				'vcIds': string[]
		}

		interface ListViewsResultSchema extends SpruceSchema.Schema {
			id: 'listViewsResult',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'namespace': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Skill view ids. For now this is every view, but soon will be only skill views */
			            'svcIds': {
			                label: 'Skill view ids',
			                type: 'id',
			                isRequired: true,
			                hint: 'For now this is every view, but soon will be only skill views',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** View ids. For now this is every view, but soon will be only views (not skill views) */
			            'vcIds': {
			                label: 'View ids',
			                type: 'id',
			                isRequired: true,
			                hint: 'For now this is every view, but soon will be only views (not skill views)',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface ListViewsResultEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ListViewsResultSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface ListViewsResponsePayload {
			
				
				'views': SpruceSchemas.Heartwood.v2021_02_11.ListViewsResult[]
		}

		interface ListViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'views': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ListViewsResultSchema,}
			            },
			    }
		}

		interface ListViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ListViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterDashboardCardsResponsePayload {
			
				
				'vcIds': string[]
		}

		interface RegisterDashboardCardsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerDashboardCardsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'vcIds': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface RegisterDashboardCardsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterDashboardCardsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitPayload {
			
				
				'ids': string[]
				
				'source'?: string| undefined | null
				
				'sourceUrl'?: string| undefined | null
				
				'theme'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Theme| undefined | null
		}

		interface RegisterSkillViewsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'ids': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'sourceUrl': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface RegisterSkillViewsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayload
		}

		interface RegisterSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsResponsePayload {
			
				/** . Views that were registered. Will match the number of ids you sent. */
				'totalRegistered': number
		}

		interface RegisterSkillViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . Views that were registered. Will match the number of ids you sent. */
			            'totalRegistered': {
			                type: 'number',
			                isRequired: true,
			                hint: 'Views that were registered. Will match the number of ids you sent.',
			                options: undefined
			            },
			    }
		}

		interface RegisterSkillViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitTarget {
			
				
				'organizationId': string
		}

		interface UpsertThemeEmitTargetSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpsertThemeEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Theme {
			
				
				'slug': string
				
				'name': string
				
				'props': SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeProps
		}

		interface ThemeSchema extends SpruceSchema.Schema {
			id: 'theme',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Theme',
			    fields: {
			            /** . */
			            'slug': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'name': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'props': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemePropsSchema,}
			            },
			    }
		}

		interface ThemeEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeResponsePayload {
			
				
				'theme': SpruceSchemas.Heartwood.v2021_02_11.Theme
		}

		interface UpsertThemeResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface UpsertThemeResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitPayload {
			
				
				'theme': SpruceSchemas.Heartwood.v2021_02_11.Theme
		}

		interface UpsertThemeEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface UpsertThemeEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTarget
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayload
		}

		interface UpsertThemeEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayloadSchema,}
			            },
			    }
		}

		interface UpsertThemeEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface DidGenerateStoryEmitTarget {
			
				
				'personId': string
		}

		interface DidGenerateStoryEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didGenerateStoryEmitTarget',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidGenerateStoryEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface DidGenerateStoryEmitPayload {
			
				
				'storyId': string
		}

		interface DidGenerateStoryEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didGenerateStoryEmitPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'storyId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidGenerateStoryEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface DidGenerateStoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitTarget
				
				'payload': SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitPayload
		}

		interface DidGenerateStoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didGenerateStoryEmitTargetAndPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitPayloadSchema,}
			            },
			    }
		}

		interface DidGenerateStoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface GenerateStoryEmitPayload {
			
				
				'storyElements': string[]
				
				'familyMembers': string[]
		}

		interface GenerateStoryEmitPayloadSchema extends SpruceSchema.Schema {
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

		interface GenerateStoryEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.GenerateStoryEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface GenerateStoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Eightbitstories.v2023_09_05.GenerateStoryEmitPayload
		}

		interface GenerateStoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'generateStoryEmitTargetAndPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.GenerateStoryEmitPayloadSchema,}
			            },
			    }
		}

		interface GenerateStoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.GenerateStoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface AddFamilyMemberEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberEmitPayload
		}

		interface AddFamilyMemberEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'addFamilyMemberEmitTargetAndPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberEmitPayloadSchema,}
			            },
			    }
		}

		interface AddFamilyMemberEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface AddFamilyMember {
			
				/** Name. */
				'name': string
				/** Bio. */
				'bio': string
		}

		interface AddFamilyMemberSchema extends SpruceSchema.Schema {
			id: 'addFamilyMember',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
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
			    }
		}

		interface AddFamilyMemberEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface AddFamilyMemberEmitPayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMember
		}

		interface AddFamilyMemberEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'addFamilyMemberEmitPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberSchema,}
			            },
			    }
		}

		interface AddFamilyMemberEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface AddFamilyMemberResponsePayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2023_09_05.PublicFamilyMember
		}

		interface AddFamilyMemberResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'addFamilyMemberResponsePayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.PublicFamilyMemberSchema,}
			            },
			    }
		}

		interface AddFamilyMemberResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface ListFamilyMembersResponsePayload {
			
				
				'familyMembers': SpruceSchemas.Eightbitstories.v2023_09_05.PublicFamilyMember[]
		}

		interface ListFamilyMembersResponsePayloadSchema extends SpruceSchema.Schema {
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
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.PublicFamilyMemberSchema,}
			            },
			    }
		}

		interface ListFamilyMembersResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.ListFamilyMembersResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface DeleteFamilyMemberEmitTarget {
			
				
				'familyMemberId': string
		}

		interface DeleteFamilyMemberEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteFamilyMemberEmitTarget',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMemberId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteFamilyMemberEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface DeleteFamilyMemberEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberEmitTarget
		}

		interface DeleteFamilyMemberEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteFamilyMemberEmitTargetAndPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberEmitTargetSchema,}
			            },
			    }
		}

		interface DeleteFamilyMemberEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface DeleteFamilyMemberResponsePayload {
			
				
				'success': boolean
		}

		interface DeleteFamilyMemberResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteFamilyMemberResponsePayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteFamilyMemberResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface UpdateFamilyMemberEmitTarget {
			
				
				'familyMemberId': string
		}

		interface UpdateFamilyMemberEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMemberEmitTarget',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMemberId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateFamilyMemberEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface UpdateFamilyMemberEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitTarget
				
				'payload': SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitPayload
		}

		interface UpdateFamilyMemberEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMemberEmitTargetAndPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateFamilyMemberEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface UpdateFamilyMember {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Bio. */
				'bio'?: string| undefined | null
		}

		interface UpdateFamilyMemberSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMember',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Bio. */
			            'bio': {
			                label: 'Bio',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface UpdateFamilyMemberEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface UpdateFamilyMemberEmitPayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMember
		}

		interface UpdateFamilyMemberEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMemberEmitPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberSchema,}
			            },
			    }
		}

		interface UpdateFamilyMemberEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface UpdateFamilyMemberResponsePayload {
			
				
				'familyMember': SpruceSchemas.Eightbitstories.v2023_09_05.PublicFamilyMember
		}

		interface UpdateFamilyMemberResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateFamilyMemberResponsePayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'familyMember': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.PublicFamilyMemberSchema,}
			            },
			    }
		}

		interface UpdateFamilyMemberResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface SaveMetaEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaEmitPayload
		}

		interface SaveMetaEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'saveMetaEmitTargetAndPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaEmitPayloadSchema,}
			            },
			    }
		}

		interface SaveMetaEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface SaveMeta {
			
				/** Family Name. */
				'name': string
				/** Values. */
				'values': string
		}

		interface SaveMetaSchema extends SpruceSchema.Schema {
			id: 'saveMeta',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Family Name. */
			            'name': {
			                label: 'Family Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Values. */
			            'values': {
			                label: 'Values',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface SaveMetaEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface SaveMetaEmitPayload {
			
				
				'meta': SpruceSchemas.Eightbitstories.v2023_09_05.SaveMeta
		}

		interface SaveMetaEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'saveMetaEmitPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'meta': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaSchema,}
			            },
			    }
		}

		interface SaveMetaEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface SaveMetaResponsePayload {
			
				
				'meta': SpruceSchemas.Eightbitstories.v2023_09_05.SaveMeta
		}

		interface SaveMetaResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'saveMetaResponsePayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'meta': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaSchema,}
			            },
			    }
		}

		interface SaveMetaResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface GetMeta {
			
				/** Family Name. */
				'name': string
				/** Values. */
				'values': string
		}

		interface GetMetaSchema extends SpruceSchema.Schema {
			id: 'getMeta',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Family Name. */
			            'name': {
			                label: 'Family Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Values. */
			            'values': {
			                label: 'Values',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetMetaEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.GetMetaSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface GetMetaResponsePayload {
			
				
				'meta'?: SpruceSchemas.Eightbitstories.v2023_09_05.GetMeta| undefined | null
		}

		interface GetMetaResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getMetaResponsePayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'meta': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.GetMetaSchema,}
			            },
			    }
		}

		interface GetMetaResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.GetMetaResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface GetStoryEmitTarget {
			
				
				'storyId': string
		}

		interface GetStoryEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getStoryEmitTarget',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'storyId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetStoryEmitTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface GetStoryEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryEmitTarget
		}

		interface GetStoryEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getStoryEmitTargetAndPayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryEmitTargetSchema,}
			            },
			    }
		}

		interface GetStoryEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface GetStoryResponsePayload {
			
				
				'body': string
		}

		interface GetStoryResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getStoryResponsePayload',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'body': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetStoryResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface StorySource {
			
				
				'personId': string
		}

		interface StorySourceSchema extends SpruceSchema.Schema {
			id: 'storySource',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface StorySourceEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.StorySourceSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface Story {
			
				
				'id': string
				
				'dateGenerated': SpruceSchema.DateTimeFieldValue
				
				'body': string
				
				'source': SpruceSchemas.Eightbitstories.v2023_09_05.StorySource
		}

		interface StorySchema extends SpruceSchema.Schema {
			id: 'story',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: 'Story',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateGenerated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'body': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                isPrivate: true,
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.StorySourceSchema,}
			            },
			    }
		}

		interface StoryEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.StorySchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface PublicFamilyMember {
			
				
				'id': string
				/** Name. */
				'name': string
				/** Bio. */
				'bio': string
		}

		interface PublicFamilyMemberSchema extends SpruceSchema.Schema {
			id: 'publicFamilyMember',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: 'Public family member',
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
			    }
		}

		interface PublicFamilyMemberEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.PublicFamilyMemberSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface MetaTarget {
			
				
				'personId': string
		}

		interface MetaTargetSchema extends SpruceSchema.Schema {
			id: 'metaTarget',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface MetaTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.MetaTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface Meta {
			
				
				'id': string
				/** Family Name. */
				'name': string
				/** Values. */
				'values': string
				
				'target': SpruceSchemas.Eightbitstories.v2023_09_05.MetaTarget
		}

		interface MetaSchema extends SpruceSchema.Schema {
			id: 'meta',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: 'Meta',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isPrivate: true,
			                isRequired: true,
			                options: undefined
			            },
			            /** Family Name. */
			            'name': {
			                label: 'Family Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Values. */
			            'values': {
			                label: 'Values',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isPrivate: true,
			                isRequired: true,
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.MetaTargetSchema,}
			            },
			    }
		}

		interface MetaEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.MetaSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface FamilyMemberTarget {
			
				
				'personId': string
		}

		interface FamilyMemberTargetSchema extends SpruceSchema.Schema {
			id: 'familyMemberTarget',
			version: 'v2023_09_05',
			namespace: 'Eightbitstories',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface FamilyMemberTargetEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.FamilyMemberTargetSchema> {}

	}


	namespace SpruceSchemas.Eightbitstories.v2023_09_05 {

		
		interface FamilyMember {
			
				
				'id': string
				/** Name. */
				'name': string
				/** Bio. */
				'bio': string
				
				'target': SpruceSchemas.Eightbitstories.v2023_09_05.FamilyMemberTarget
		}

		interface FamilyMemberSchema extends SpruceSchema.Schema {
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
			                options: {schema: SpruceSchemas.Eightbitstories.v2023_09_05.FamilyMemberTargetSchema,}
			            },
			    }
		}

		interface FamilyMemberEntity extends SchemaEntity<SpruceSchemas.Eightbitstories.v2023_09_05.FamilyMemberSchema> {}

	}

}
