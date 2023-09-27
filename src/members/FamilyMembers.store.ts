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
import familyMemberSchema from '#spruce/schemas/eightbitstories/v2023_09_05/familyMember.schema'

export default class FamilyMembersStore extends AbstractStore<
	FullSchema,
	CreateSchema,
	UpdateSchema,
	DatabaseSchema
> {
	public name = 'FamilyMembers'
	protected collectionName = 'family_members'

	protected createSchema = createSchema
	protected updateSchema = updateSchema
	protected fullSchema = fullSchema
	protected databaseSchema = databaseSchema

	public static Store(
		options: FamilyMemberStoreOptions & UniversalStoreOptions
	) {
		return new this(options.db)
	}

	protected async willCreate(
		values: CreateFamilyMember
	): Promise<Omit<DatabaseFamilyMember, 'id'>> {
		return values
	}

	protected async willUpdate(values: UpdateFamilyMember) {
		return values as Partial<DatabaseFamilyMember>
	}

	public async seed(options: StoreSeedOptions) {
		const { TestClass, totalToSeed } = options

		const all = new Array(totalToSeed).fill(0).map(() =>
			this.createOne({
				bio: generateId(),
				name: generateId(),
				target: {
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
		record: DatabaseFamilyMember,
		_options?: PrepareOptions<IncludePrivateFields, FullSchema, F>
	) {
		return record as PrepareResults<FullSchema, IncludePrivateFields>
	}
}

// The structure of the data you'll be returning from finds
const fullSchema = familyMemberSchema

// The values you will accept when creating a record
const createSchema = buildSchema({
	id: 'createFamilyMember',
	fields: {
		...dropFields(fullSchema.fields, ['id']),
	},
})

// The values you will accept when updating a record
const updateSchema = buildSchema({
	id: 'updateFamilyMember',
	fields: {
		...makeFieldsOptional(dropFields(fullSchema.fields, ['id'])),
	},
})

// The values you will actually save to the databases (in this case, makes id required)
const databaseSchema = buildSchema({
	id: 'databaseFamilyMember',
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

// type FamilyMember = SchemaValues<FullSchema>
type CreateFamilyMember = SchemaValues<CreateSchema>
type UpdateFamilyMember = SchemaValues<UpdateSchema>
type DatabaseFamilyMember = SchemaValues<DatabaseSchema>
// type QueryFamilyMember = Partial<FamilyMember>

type FamilyMemberStoreOptions = UniversalStoreOptions
