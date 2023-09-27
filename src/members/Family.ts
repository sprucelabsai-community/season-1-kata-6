import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { AddFamilyMember, UpdateFamilyMember } from '../eightbitstories.types'
import SpruceError from '../errors/SpruceError'
import FamilyMembersStore from './FamilyMembers.store'

export default class Family {
	protected constructor(protected readonly members: FamilyMembersStore) {}

	public static async Family(stores: SimpleStoreFactory) {
		const members = await stores.getStore('familyMembers')
		return new this(members)
	}

	public async addMember(personId: string, values: AddFamilyMember) {
		return this.members.createOne({
			...values,
			target: {
				personId,
			},
		})
	}

	public async listMembers(personId: string) {
		return this.members.find({
			//@ts-ignore
			'target.personId': personId,
		})
	}

	public async updateMember(
		personId: string,
		id: string,
		values: UpdateFamilyMember
	) {
		let match = await this.members.findOne(
			{
				id,
			},
			{ shouldIncludePrivateFields: true }
		)

		if (!match) {
			throw new SpruceError({
				code: 'NOT_FOUND',
			})
		}

		if (match.target.personId !== personId) {
			throw new SpruceError({
				code: 'UNAUTHORIZED_ACCESS',
				youDontHaveAccessTo: `update this family member!!`,
			})
		}

		await this.members.updateOne(
			{
				id,
			},
			{ ...values }
		)
	}

	public async deleteMember(personId: string, id: string) {
		const match = await this.members.findOne({
			id,
		})

		if (!match) {
			throw new SpruceError({
				code: 'NOT_FOUND',
			})
		}

		const count = await this.members.deleteOne({
			id,
			//@ts-ignore
			'target.personId': personId,
		})

		if (count === 0) {
			throw new SpruceError({
				code: 'UNAUTHORIZED_ACCESS',
				youDontHaveAccessTo: `delete this family member!!`,
			})
		}
	}
}
