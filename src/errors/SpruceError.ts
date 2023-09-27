import AbstractSpruceError from '@sprucelabs/error'
import ErrorOptions from '#spruce/errors/options.types'

export default class SpruceError extends AbstractSpruceError<ErrorOptions> {
	public friendlyMessage(): string {
		const { options } = this
		let message

		switch (options?.code) {
			case 'NOT_FOUND':
				message = `I couldn't find what you were looking for!`
				break

			case 'UNAUTHORIZED_ACCESS':
				message = `Oh no!! I wanted to help, but you can't ${options.youDontHaveAccessTo}`
				break

			case 'META_NOT_FOUND':
				message = `It looks like you haven't saved your family name and values yet! You gotta do that before I can write a story!`
				break

			default:
				message = super.friendlyMessage()
		}

		const fullMessage = options.friendlyMessage
			? options.friendlyMessage
			: message

		return fullMessage
	}
}
