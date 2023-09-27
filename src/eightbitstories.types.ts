import { SpruceSchemas } from '@sprucelabs/spruce-core-schemas'
import StoryGenerator from './generation/StoryGenerator'
import Family from './members/Family'
import MetaTracker from './meta/MetaTracker'

export type Meta = SpruceSchemas.Eightbitstories.v2023_09_05.Meta
export type PublicMeta = SpruceSchemas.Eightbitstories.v2023_09_05.GetMeta
export type GetMeta = SpruceSchemas.Eightbitstories.v2023_09_05.GetMeta
export type SaveMeta = SpruceSchemas.Eightbitstories.v2023_09_05.SaveMeta
export type FamilyMemberSchema =
	SpruceSchemas.Eightbitstories.v2023_09_05.FamilyMemberSchema
export type FamilyMember =
	SpruceSchemas.Eightbitstories.v2023_09_05.FamilyMember
export type AddFamilyMember =
	SpruceSchemas.Eightbitstories.v2023_09_05.AddFamilyMember
export type UpdateFamilyMember =
	SpruceSchemas.Eightbitstories.v2023_09_05.UpdateFamilyMember
export type PublicFamilyMember =
	SpruceSchemas.Eightbitstories.v2023_09_05.PublicFamilyMember
export type PublicStory = SpruceSchemas.Eightbitstories.v2023_09_05.PublicStory

export interface StoryElement {
	id: string
	name: string
	description: string
}

declare module '@sprucelabs/spruce-skill-utils/build/types/skill.types' {
	interface SkillContext {
		metas: MetaTracker
		family: Family
		generator: StoryGenerator
	}
}
