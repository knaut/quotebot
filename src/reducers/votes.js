import { 
	QUOTE_VOTE_UP,
	QUOTE_VOTE_DOWN,
	QUOTE_VOTE_NEUTRAL,
	QUOTES_LOADED
} from '../actions/quotes'

export default function votes(
	state = {
		/*
			we will store votes as "metadata"
			using the quote ids as keys in a normalized object

			<quote id>: {
				ups: 0,
				downs: 0,
				neutrals: 0
			}
		*/
	},
	action
) {
	switch(action.type) {
		default: {
			return state
		}
		case QUOTES_LOADED: {
			// build up our inital voting state, which has no votes on start
			const { ids } = action.payload
			const initialTallies = {}

			for (let i = 0; ids.length > i; ++i) {
				initialTallies[ ids[i] ] = {
					ups: 0,
					neutrals: 0,
					downs: 0
				}
			}

			const newState = initialTallies

			return newState
		}
		case QUOTE_VOTE_UP: {
			const { index } = action.payload
			const newState = {
				...state
			}

			const thisVoteTally = state[ index ]
			const ups = thisVoteTally.ups + 1

			const newVoteTally = {
				...thisVoteTally,
				ups
			}

			newState[ index ] = newVoteTally

			return newState
		}
		case QUOTE_VOTE_NEUTRAL: {
			const { index } = action.payload
			const newState = {
				...state
			}

			const thisVoteTally = state[ index ]
			const neutrals = thisVoteTally.neutrals + 1

			const newVoteTally = {
				...thisVoteTally,
				neutrals
			}

			newState[ index ] = newVoteTally

			return newState
		}
		case QUOTE_VOTE_DOWN: {
			const { index } = action.payload
			const newState = {
				...state
			}

			const thisVoteTally = state[ index ]
			const downs = thisVoteTally.downs + 1

			const newVoteTally = {
				...thisVoteTally,
				downs
			}

			newState[ index ] = newVoteTally

			return newState
		}

	}
}




