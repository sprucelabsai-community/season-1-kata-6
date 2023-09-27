import { assertOptions } from '@sprucelabs/schema'
import { PublicFamilyMember, StoryElement } from '../eightbitstories.types'
import { INTRO } from './constants'

export default class PromptGenerator {
	public static Generator() {
		return new this()
	}

	public generate(options: GeneratePromptOptions) {
		const { familyMembers, familyValues, familyName, storyElements } =
			assertOptions(options, [
				'familyMembers',
				'familyValues',
				'familyName',
				'storyElements',
			])

		let message = INTRO

		message += `\n\n\nFamily Name:\nThe ${familyName}s`
		message += `\n\nFamily Values:\n${familyValues}\n`
		message += `\n\nFamily Members:\n${familyMembers
			.map((member) => 'Name: ' + member.name + '\n' + 'Bio: ' + member.bio)
			.join('\n\n')}\n`
		message += `\n\nDesired Story Elements: \n`
		message += storyElements
			.map((element) => element.name + ':' + element.description)
			.join('\n\n')

		message += `\n\nDuration:\n10 minutes\n`

		return message
	}
}

export interface GeneratePromptOptions {
	familyMembers: Omit<PublicFamilyMember, 'id'>[]
	familyValues: string
	familyName: string
	storyElements: StoryElement[]
}
