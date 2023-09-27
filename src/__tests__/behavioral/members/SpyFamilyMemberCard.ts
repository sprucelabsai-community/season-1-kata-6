import { generateId } from '@sprucelabs/test-utils'
import { PublicFamilyMember } from '../../../eightbitstories.types'
import FamilyMemberFormCardViewController from '../../../members/FamilyMemberFormCard.vc'

export default class SpyFamilyMemberCard extends FamilyMemberFormCardViewController {
	public getFamilyMemberId(): any {
		return this.member?.id
	}
	public getFormVc() {
		return this.formVc
	}

	public async fillOutRandomly() {
		await this.formVc.setValues({
			name: generateId(),
			bio: generateId(),
		})

		return this.formVc.getValues()
	}

	public async simulateAddMember(member: PublicFamilyMember) {
		return this.onAddHandler?.(member)
	}
}
