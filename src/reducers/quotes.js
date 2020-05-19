import { QUOTES_LOADED } from '../actions/quotes'

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
			const { entities, ids } = action.payload

			const newState = {
				...state,
				entities,
				ids
			}

			return newState
		}
	}
}