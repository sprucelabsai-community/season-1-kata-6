import { MercuryClient } from '@sprucelabs/mercury-client'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class DeleteMemberListenerTest extends AbstractEightBitTest {
	protected static async beforeEach(): Promise<void> {
		await super.beforeEach()
		await this.bootSkill()
	}

	@test()
	@seed('familyMembers', 1)
	protected static async actuallyRemovesRecord() {
		await this.deleteFirstFamilyMember()
		await this.assertTotalMembers(0)
	}

	@test()
	@seed('familyMembers', 2)
	protected static async actuallyRemovesCorrectRecord() {
		const member = await this.getSecondFamilyMember()
		await this.emitDeleteMember(member.id)
		await this.assertTotalMembers(1)
		const found = await this.getFirstFamilyMember()
		assert.isNotEqual(found?.id, member.id)
	}

	@test()
	@seed('familyMembers', 1)
	protected static async cantDeleteSomeoneElsesMember() {
		const { client } = await this.people.loginAsDemoPerson('555-555-5678')
		const err = await assert.doesThrowAsync(() =>
			this.deleteFirstFamilyMember(client)
		)

		errorAssert.assertError(err, 'UNAUTHORIZED_ACCESS')
	}

	@test()
	protected static async throwsNotFoundWithBadId() {
		const err = await assert.doesThrowAsync(() =>
			this.emitDeleteMember(generateId())
		)

		errorAssert.assertError(err, 'NOT_FOUND')
	}

	private static async deleteFirstFamilyMember(client?: MercuryClient) {
		const member = await this.getFirstFamilyMember()
		await this.emitDeleteMember(member.id, client)
	}

	private static async assertTotalMembers(expected: number) {
		const count = await this.members.count()
		assert.isEqual(count, expected)
	}

	private static async emitDeleteMember(id: string, client?: MercuryClient) {
		await (client ?? this.fakedClient).emitAndFlattenResponses(
			'eightbitstories.delete-family-member::v2023_09_05',
			{
				target: {
					familyMemberId: id,
				},
			}
		)
	}
}
