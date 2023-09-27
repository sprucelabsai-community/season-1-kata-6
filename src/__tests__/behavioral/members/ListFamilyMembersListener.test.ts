import { MercuryClient } from '@sprucelabs/mercury-client'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class ListFamilyMembersListenerTest extends AbstractEightBitTest {
	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
	}

	@test()
	protected static async isListening() {
		await this.emitListFamilyMembers()
	}

	@test()
	@seed('familyMembers', 1)
	protected static async returnsFirstFamilyMember() {
		await this.assertTotalMembersReturned(1)
	}

	@test()
	@seed('familyMembers', 1)
	protected static async returnsFamilyMembersForLoggedInPerson() {
		const { client } = await this.people.loginAsDemoPerson('555-555-1111')
		await this.assertTotalMembersReturned(0, client)
	}

	private static async assertTotalMembersReturned(
		expected: number,
		client?: MercuryClient
	) {
		const results = await this.emitListFamilyMembers(client)
		assert.isLength(results, expected)
	}

	private static async emitListFamilyMembers(client?: MercuryClient) {
		const [{ familyMembers }] = await (
			client ?? this.fakedClient
		).emitAndFlattenResponses(
			'eightbitstories.list-family-members::v2023_09_05'
		)

		return familyMembers
	}
}
