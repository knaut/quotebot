import { 
	QUOTES_LOADED,
	QUOTE_VOTE_DOWN,
	QUOTE_VOTE_NEUTRAL,
	QUOTE_VOTE_UP
} from '../actions/quotes'

export default function activeQuote(
	state = {
		index: null
	},
	action
) {
	switch(action.type) {
		default: {
			return state
		}
		case QUOTES_LOADED: {
			// whenever this action fires, select a random quote
			const randomId = Math.floor( Math.random() * action.payload.ids.length )

			const newQuoteId = action.payload.ids[ randomId ]

			const newState = {
				index: newQuoteId
			}

			return newState
		}
		case QUOTE_VOTE_UP: {
			// whenever this action fires, select a random quote
			const randomId = Math.floor( Math.random() * action.payload.ids.length )

			const newQuoteId = action.payload.ids[ randomId ]

			const newState = {
				index: newQuoteId
			}

			return newState
		}
		case QUOTE_VOTE_DOWN: {
			// whenever this action fires, select a random quote
			const randomId = Math.floor( Math.random() * action.payload.ids.length )

			const newQuoteId = action.payload.ids[ randomId ]

			const newState = {
				index: newQuoteId
			}

			return newState
		}
		case QUOTE_VOTE_NEUTRAL: {
			// whenever this action fires, select a random quote
			const randomId = Math.floor( Math.random() * action.payload.ids.length )

			const newQuoteId = action.payload.ids[ randomId ]

			const newState = {
				index: newQuoteId
			}

			return newState
		}
	}
	
}