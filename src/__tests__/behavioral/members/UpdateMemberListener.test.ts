import { MercuryClient } from '@sprucelabs/mercury-client'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import { UpdateFamilyMember } from '../../../eightbitstories.types'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class UpdateMemberListenerTest extends AbstractEightBitTest {
	private static updates: UpdateFamilyMember
	protected static async beforeEach(): Promise<void> {
		await super.beforeEach()
		await this.bootSkill()
		this.updates = {
			name: generateId(),
			bio: generateId(),
		}
	}
	@test()
	protected static async isListening() {
		const id = generateId()
		const err = await assert.doesThrowAsync(() => this.emitUpdate(id))
		errorAssert.assertError(err, 'NOT_FOUND')
	}

	@test()
	@seed('familyMembers', 1)
	protected static async unAuthorizedAccessThrows() {
		const member = await this.getFirstFamilyMember()
		const { client } = await this.people.loginAsDemoPerson('555-111-2222')
		const err = await assert.doesThrowAsync(() =>
			this.emitUpdate(member.id, client)
		)

		errorAssert.assertError(err, 'UNAUTHORIZED_ACCESS')

		const updated = await this.getFirstFamilyMember()
		assert.isNotEqual(updated.name, this.updates.name)
	}

	@test()
	@seed('familyMembers', 1)
	protected static async actuallyUpdatesMember() {
		const member = await this.getFirstFamilyMember()
		await this.emitUpdate(member.id)
		const updated = await this.getFirstFamilyMember()
		assert.isEqual(updated.name, this.updates.name)
		assert.isEqual(updated.bio, this.updates.bio)
	}

	@test()
	@seed('familyMembers', 2)
	protected static async updatesTheCorrectMember() {
		const members = await this.members.find({})
		await this.emitUpdate(members[0].id)
		const updated = await this.getSecondFamilyMember()
		assert.isNotEqual(updated.name, this.updates.name)
	}

	private static emitUpdate(id: string, client?: MercuryClient) {
		return (client ?? this.fakedClient).emitAndFlattenResponses(
			'eightbitstories.update-family-member::v2023_09_05',
			{
				target: {
					familyMemberId: id,
				},
				payload: {
					familyMember: this.updates,
				},
			}
		)
	}
}
