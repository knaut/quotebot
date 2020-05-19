import { combineReducers } from 'redux'

import quotes from '../reducers/quotes'
import activeQuote from '../reducers/activeQuote'
import votes from '../reducers/votes'

export default () => combineReducers({
	quotes,
	activeQuote,
	votes
})