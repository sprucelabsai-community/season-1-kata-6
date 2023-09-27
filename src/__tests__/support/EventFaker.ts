import { SpruceSchemas, eventFaker } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import {
	GetMeta,
	PublicFamilyMember,
	PublicStory,
} from '../../eightbitstories.types'

export default class EventFaker {
	public async fakeDidGenerateStory(
		cb?: (targetAndPayload: DidGenerateTargetAndPayload) => void
	) {
		await eventFaker.on(
			'eightbitstories.did-generate-story::v2023_09_05',
			(targetAndPayload) => {
				cb?.(targetAndPayload)
			}
		)
	}
	public async fakeGetStory(
		cb?: (targetAndPayload: GetStoryTargetAndPayload) => void | string
	) {
		await eventFaker.on(
			'eightbitstories.get-story::v2023_09_05',
			(targetAndPayload) => {
				return {
					body: cb?.(targetAndPayload) ?? generateId(),
				}
			}
		)
	}
	public async fakeGenerateStory(
		cb?: (targetAndPayload: GenerateStoryTargetAndPayload) => void | PublicStory
	) {
		await eventFaker.on(
			'eightbitstories.generate-story::v2023_09_05',
			(targetAndPayload) => {
				cb?.(targetAndPayload)
			}
		)
	}

	private generateStoryValues() {
		return {
			id: generateId(),
			dateGenerated: new Date().getTime(),
			body: generateId(),
		}
	}

	public async fakeUpdateFamilyMember(
		cb?: (targetAndPayload: UpdateFamilyMemberTargetAndPayload) => void
	) {
		await eventFaker.on(
			'eightbitstories.update-family-member::v2023_09_05',
			(targetAndPayload) => {
				cb?.(targetAndPayload)
				return {
					familyMember: this.generatePublicFamilyMemberValues(),
				}
			}
		)
	}
	public async fakeDeleteFamilyMember(
		cb?: (targetAndPayload: DeleteMemberTargetAndPayload) => void
	) {
		await eventFaker.on(
			'eightbitstories.delete-family-member::v2023_09_05',
			(targetAndPayload) => {
				cb?.(targetAndPayload)
				return {
					success: true,
				}
			}
		)
	}
	public async fakeListFamilyMembers(
		cb?: () =>
			| void
			| PublicFamilyMember[]
			| Promise<void | PublicFamilyMember[]>
	) {
		await eventFaker.on(
			'eightbitstories.list-family-members::v2023_09_05',
			async () => {
				return {
					familyMembers: (await cb?.()) ?? [],
				}
			}
		)
	}
	public async fakeAddFamilyMember(
		cb?: (
			targetAndPayload: AddMemberTargetAndPayload
		) => PublicFamilyMember | void
	) {
		await eventFaker.on(
			'eightbitstories.add-family-member::v2023_09_05',
			(targetAndPayload) => {
				return {
					familyMember:
						cb?.(targetAndPayload) ?? this.generatePublicFamilyMemberValues(),
				}
			}
		)
	}
	public generatePublicFamilyMemberValues() {
		return {
			id: generateId(),
			name: generateId(),
			bio: generateId(),
		}
	}

	public async fakeGetMeta(cb?: () => void | GetMeta) {
		await eventFaker.on('eightbitstories.get-meta::v2023_09_05', () => {
			return {
				meta: cb?.() ?? this.generateRandomMeta(),
			}
		})
	}

	public generateRandomMeta(): GetMeta {
		return {
			name: generateId(),
			values: generateId(),
		}
	}

	public generateRandomMetaWithTarget(personId: string) {
		return {
			...this.generateRandomMeta(),
			target: {
				personId,
			},
		}
	}

	public async fakeSaveMeta(
		cb?: (
			targetAndPayload: SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaEmitTargetAndPayload
		) => void
	) {
		await eventFaker.on(
			'eightbitstories.save-meta::v2023_09_05',
			(targetAndPayload) => {
				cb?.(targetAndPayload)
				return {
					meta: this.generateRandomMeta(),
				}
			}
		)
	}
}

export type AddMemberTargetAndPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMemberEmitTargetAndPayload

export type DeleteMemberTargetAndPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.DeleteFamilyMemberEmitTargetAndPayload

export type UpdateFamilyMemberTargetAndPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMemberEmitTargetAndPayload

export type GenerateStoryTargetAndPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.GenerateStoryEmitTargetAndPayload

export type GetStoryTargetAndPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.GetStoryEmitTargetAndPayload
export type DidGenerateTargetAndPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.DidGenerateStoryEmitTargetAndPayload
