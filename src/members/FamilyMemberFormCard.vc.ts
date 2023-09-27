import {
	AbstractViewController,
	Card,
	CardViewController,
	FormViewController,
	ViewControllerOptions,
	buildForm,
} from '@sprucelabs/heartwood-view-controllers'
import familyMemberSchema from '#spruce/schemas/eightbitstories/v2023_09_05/familyMember.schema'
import {
	FamilyMember,
	FamilyMemberSchema,
	PublicFamilyMember,
} from '../eightbitstories.types'

export default class FamilyMemberFormCardViewController extends AbstractViewController<Card> {
	public static id = 'family-member-form-card'
	private cardVc: CardViewController
	protected formVc: FormViewController<FamilyMemberSchema>
	private onCancelHandler: () => void | Promise<void>
	private onUpdateHandler?: OnAddHandler
	protected onAddHandler?: OnAddHandler
	protected member?: PublicFamilyMember

	public constructor(
		options: ViewControllerOptions & FamilyMemberFormCardOptions
	) {
		super(options)

		const { onCancel, onAdd, member, onUpdate } = options

		this.onCancelHandler = onCancel
		this.onAddHandler = onAdd
		this.onUpdateHandler = onUpdate
		this.member = member

		this.formVc = this.FormVc()
		this.cardVc = this.CardVc()
	}

	public async load() {
		if (this.member) {
			await this.formVc.setValues(this.member)
		}
	}

	private CardVc(): CardViewController {
		return this.Controller('card', {
			header: {
				title: this.member ? this.member.name : 'Add family member!',
			},
			body: {
				sections: [
					{
						form: this.formVc.render(),
					},
				],
			},
		})
	}

	private FormVc() {
		return this.Controller(
			'form',
			buildForm({
				id: 'family-member-form',
				schema: familyMemberSchema,
				onCancel: this.handleClickCancel.bind(this),
				onSubmit: this.handleSubmit.bind(this),
				sections: [
					{
						fields: [
							'name',
							{
								name: 'bio',
								renderAs: 'textarea',
							},
						],
					},
				],
			})
		)
	}

	private async handleSubmit() {
		this.formVc.setIsBusy(true)

		try {
			if (this.member) {
				await this.updateMember()
			} else {
				await this.createMember()
			}
		} catch (err: any) {
			await this.alert({
				message: err.message ?? 'Oh no! I could not add your family member!',
			})
		}

		this.formVc.setIsBusy(false)
	}

	private async updateMember() {
		const client = await this.connectToApi()
		await client.emitAndFlattenResponses(
			'eightbitstories.update-family-member::v2023_09_05',
			{
				target: {
					familyMemberId: this.member!.id,
				},
				payload: {
					familyMember: this.formVc.getValues(),
				},
			}
		)

		await this.onUpdateHandler?.({
			id: this.member!.id,
			...this.formVc.getValues(),
		} as PublicFamilyMember)
	}

	private async createMember() {
		const client = await this.connectToApi()
		const [{ familyMember }] = await client.emitAndFlattenResponses(
			'eightbitstories.add-family-member::v2023_09_05',
			{
				payload: {
					familyMember: { ...(this.formVc.getValues() as FamilyMember) },
				},
			}
		)

		await this.onAddHandler?.(familyMember)
	}

	private async handleClickCancel() {
		await this.onCancelHandler()
	}

	public render() {
		return this.cardVc.render()
	}
}

export interface FamilyMemberFormCardOptions {
	onCancel: () => void | Promise<void>
	onAdd?: OnAddHandler
	onUpdate?: OnAddHandler
	member?: PublicFamilyMember
}

type OnAddHandler = (member: PublicFamilyMember) => void | Promise<void>
