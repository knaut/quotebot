import { QUOTES_LOADED } from '../actions/quotes'

function formatLoadedQuotes(array) {
	// normalize the array of quotes
	const entities = {}
	const ids = []

	for (let i = 0; array.length > i; ++i) {
		const entity = array[i]
		const entityKey = entity.id

		entities[ entityKey ] = entity

		ids.push(entityKey)
	}

	return { entities, ids }
}

export default function quotes(
	state = {
		entities: {},
		ids: []
	},
	action
) {
	switch(action.type) {
		default: {
			return state
		}
		case QUOTES_LOADED: {
			// normalize the quotes
			const normalized = formatLoadedQuotes(action.payload)

			const newState = {
				...state,
				...normalized
			}

			return newState
		}
	}
}