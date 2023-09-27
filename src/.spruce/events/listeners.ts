import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
	{
		eventName: 'generate-story',
		eventNamespace: 'eightbitstories',
		version: 'v2023_09_05',
		callback:
			require('../../listeners/eightbitstories/generate-story.v2023_09_05.listener')
				.default,
		isGlobal:
			require('../../listeners/eightbitstories/generate-story.v2023_09_05.listener')
				.isGlobal,
	},
	{
		eventName: 'get-story',
		eventNamespace: 'eightbitstories',
		version: 'v2023_09_05',
		callback:
			require('../../listeners/eightbitstories/get-story.v2023_09_05.listener')
				.default,
		isGlobal:
			require('../../listeners/eightbitstories/get-story.v2023_09_05.listener')
				.isGlobal,
	},
	{
		eventName: 'did-boot',
		eventNamespace: 'skill',
		version: 'v2023_09_05',
		callback: require('../../listeners/skill/did-boot.v2023_09_05.listener')
			.default,
		isGlobal: require('../../listeners/skill/did-boot.v2023_09_05.listener')
			.isGlobal,
	},
	{
		eventName: 'add-family-member',
		eventNamespace: 'eightbitstories',
		version: 'v2023_09_05',
		callback:
			require('../../members/listeners/eightbitstories/add-family-member.v2023_09_05.listener')
				.default,
		isGlobal:
			require('../../members/listeners/eightbitstories/add-family-member.v2023_09_05.listener')
				.isGlobal,
	},
	{
		eventName: 'delete-family-member',
		eventNamespace: 'eightbitstories',
		version: 'v2023_09_05',
		callback:
			require('../../members/listeners/eightbitstories/delete-family-member.v2023_09_05.listener')
				.default,
		isGlobal:
			require('../../members/listeners/eightbitstories/delete-family-member.v2023_09_05.listener')
				.isGlobal,
	},
	{
		eventName: 'list-family-members',
		eventNamespace: 'eightbitstories',
		version: 'v2023_09_05',
		callback:
			require('../../members/listeners/eightbitstories/list-family-members.v2023_09_05.listener')
				.default,
		isGlobal:
			require('../../members/listeners/eightbitstories/list-family-members.v2023_09_05.listener')
				.isGlobal,
	},
	{
		eventName: 'update-family-member',
		eventNamespace: 'eightbitstories',
		version: 'v2023_09_05',
		callback:
			require('../../members/listeners/eightbitstories/update-family-member.v2023_09_05.listener')
				.default,
		isGlobal:
			require('../../members/listeners/eightbitstories/update-family-member.v2023_09_05.listener')
				.isGlobal,
	},
	{
		eventName: 'get-meta',
		eventNamespace: 'eightbitstories',
		version: 'v2023_09_05',
		callback:
			require('../../meta/listeners/eightbitstories/get-meta.v2023_09_05.listener')
				.default,
		isGlobal:
			require('../../meta/listeners/eightbitstories/get-meta.v2023_09_05.listener')
				.isGlobal,
	},
	{
		eventName: 'save-meta',
		eventNamespace: 'eightbitstories',
		version: 'v2023_09_05',
		callback:
			require('../../meta/listeners/eightbitstories/save-meta.v2023_09_05.listener')
				.default,
		isGlobal:
			require('../../meta/listeners/eightbitstories/save-meta.v2023_09_05.listener')
				.isGlobal,
	},
]

export default listeners
