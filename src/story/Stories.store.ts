import {
	AbstractStore,
	UniversalStoreOptions,
	PrepareOptions,
	PrepareResults,
} from '@sprucelabs/data-stores'
import {
	buildSchema,
	dropFields,
	makeFieldsOptional,
	SchemaValues,
	SchemaFieldNames,
} from '@sprucelabs/schema'
import { StoreSeedOptions } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import storySchema from '#spruce/schemas/eightbitstories/v2023_09_05/story.schema'

export default class StoriesStore extends AbstractStore<
	FullSchema,
	CreateSchema,
	UpdateSchema,
	DatabaseSchema
> {
	public name = 'Stories'
	protected collectionName = 'stories'

	protected createSchema = createSchema
	protected updateSchema = updateSchema
	protected fullSchema = fullSchema
	protected databaseSchema = databaseSchema

	public static Store(options: StoryStoreOptions & UniversalStoreOptions) {
		return new this(options.db)
	}

	protected async willCreate(
		values: CreateStory
	): Promise<Omit<DatabaseStory, 'id'>> {
		return values
	}

	protected async willUpdate(values: UpdateStory) {
		return values as Partial<DatabaseStory>
	}

	public async seed(options: StoreSeedOptions) {
		const { TestClass, totalToSeed } = options

		const all = new Array(totalToSeed).fill(0).map(() =>
			this.createOne({
				body: generateId(),
				dateGenerated: new Date().getTime(),
				source: {
					personId: TestClass.fakedPerson.id,
				},
			})
		)

		await Promise.all(all)
	}

	protected async prepareRecord<
		IncludePrivateFields extends boolean,
		F extends SchemaFieldNames<FullSchema> = SchemaFieldNames<FullSchema>,
	>(
		record: DatabaseStory,
		_options?: PrepareOptions<IncludePrivateFields, FullSchema, F>
	) {
		return record as PrepareResults<FullSchema, IncludePrivateFields>
	}
}

// The structure of the data you'll be returning from finds
const fullSchema = storySchema

// The values you will accept when creating a record
const createSchema = buildSchema({
	id: 'createStory',
	fields: {
		...dropFields(fullSchema.fields, ['id']),
	},
})

// The values you will accept when updating a record
const updateSchema = buildSchema({
	id: 'updateStory',
	fields: {
		...makeFieldsOptional(dropFields(fullSchema.fields, ['id'])),
	},
})

// The values you will actually save to the databases (in this case, makes id required)
const databaseSchema = buildSchema({
	id: 'databaseStory',
	fields: {
		...fullSchema.fields,
		id: {
			type: 'id',
			isRequired: true,
		},
	},
})

type FullSchema = typeof fullSchema
type CreateSchema = typeof createSchema
type UpdateSchema = typeof updateSchema
type DatabaseSchema = typeof databaseSchema

// type Story = SchemaValues<FullSchema>
type CreateStory = SchemaValues<CreateSchema>
type UpdateStory = SchemaValues<UpdateSchema>
type DatabaseStory = SchemaValues<DatabaseSchema>
// type QueryStory = Partial<Story>

type StoryStoreOptions = UniversalStoreOptions
