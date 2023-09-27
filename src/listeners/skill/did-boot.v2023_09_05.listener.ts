import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { StoryGeneratorImpl } from '../../generation/StoryGenerator'
import Family from '../../members/Family'
import MetaTracker from '../../meta/MetaTracker'

export default async (event: SpruceEvent): SpruceEventResponse => {
	const { stores, skill, client } = event

	const tracker = await MetaTracker.Tracker(stores)
	skill.updateContext('metas', tracker)

	const family = await Family.Family(stores)
	skill.updateContext('family', family)

	const generator = await StoryGeneratorImpl.Generator({
		stores,
		client,
	})
	skill.updateContext('generator', generator)
}
