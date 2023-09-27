import {
	AbstractSkillViewController,
	ActiveRecordCardViewController,
	ListRow,
	Router,
	SkillView,
	SkillViewControllerLoadOptions,
	ViewControllerOptions,
	buildActiveRecordCard,
} from '@sprucelabs/heartwood-view-controllers'
import { PublicFamilyMember } from '../eightbitstories.types'

export default class MembersSkillViewController extends AbstractSkillViewController {
	public static id = 'members'

	private router!: Router
	private activeRecordCardVc: ActiveRecordCardViewController

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.activeRecordCardVc = this.ActiveRecordCardVc()
	}

	private ActiveRecordCardVc(): ActiveRecordCardViewController {
		return this.Controller(
			'active-record-card',
			buildActiveRecordCard({
				eventName: 'eightbitstories.list-family-members::v2023_09_05',
				rowTransformer: this.renderRow.bind(this),
				responseKey: 'familyMembers',
				columnWidths: ['fill'],
				header: {
					title: 'Family Members',
					image: 'https://storybook.spruce.bot/images/8bit/members.jpg',
				},
				footer: {
					buttons: [
						{
							id: 'back',
							label: 'Back',
							onClick: this.handleClickBack.bind(this),
						},
						{
							id: 'add',
							label: 'Add Family Member',
							type: 'primary',
							onClick: this.handleRenderClickAdd.bind(this),
						},
					],
				},
			})
		)
	}

	private renderRow(member: PublicFamilyMember): ListRow {
		return {
			id: member.id,
			onClick: () => this.handleClickRow(member),
			cells: [
				{
					text: {
						content: member.name,
					},
					subText: {
						content: member.bio.substring(0, 50) + '...',
					},
				},
				{
					button: {
						id: 'delete',
						lineIcon: 'delete',
						type: 'destructive',
						onClick: () => this.handleClickDeleteMember(member),
					},
				},
			],
		}
	}

	private async handleClickRow(member: PublicFamilyMember) {
		const vc = this.Controller('eightbitstories.family-member-form-card', {
			member,
			onCancel: async () => dlgVc.hide(),
			onUpdate: async (member) => {
				void dlgVc.hide()
				this.listVc.upsertRow(member.id, this.renderRow(member))
			},
		})

		const dlgVc = this.renderInDialog(vc.render())

		await vc.load()
	}

	private async handleClickDeleteMember(member: PublicFamilyMember) {
		const confirm = await this.confirm({
			message: `Are you sure you want to remove ${member.name} from your family?`,
			isDestructive: true,
		})

		if (!confirm) {
			return
		}

		try {
			const client = await this.connectToApi()
			await client.emitAndFlattenResponses(
				'eightbitstories.delete-family-member::v2023_09_05',
				{
					target: {
						familyMemberId: member.id,
					},
				}
			)
			this.listVc.deleteRow(member.id)
		} catch (err: any) {
			this.alert({
				message: err.message ?? `I could not delete your family member!!!`,
			})
		}
	}

	private async handleRenderClickAdd() {
		const vc = this.Controller('eightbitstories.family-member-form-card', {
			onCancel: async () => dlgVc.hide(),
			onAdd: async () => {
				await dlgVc.hide()
				await this.activeRecordCardVc.refresh()
			},
		})
		const dlgVc = this.renderInDialog(vc.render())
	}

	public async load(options: SkillViewControllerLoadOptions) {
		const { router } = options
		this.router = router
		await this.activeRecordCardVc.load()
	}

	private async handleClickBack() {
		await this.router.redirect('eightbitstories.root')
	}

	protected get cardVc() {
		return this.activeRecordCardVc
	}
	protected get listVc() {
		return this.activeRecordCardVc.getListVc()
	}

	public render(): SkillView {
		return {
			layouts: [
				{
					cards: [this.cardVc.render()],
				},
			],
		}
	}
}
