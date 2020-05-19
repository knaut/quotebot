import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import generateRootReducer from './generateRootReducer'

export default function generateStore(state) {
	const initialState = state || {}

	const middleware = compose(
		applyMiddleware(
			createLogger()
		)
	)

	const store = createStore(
		generateRootReducer(),
		initialState,
		middleware
	)

	return store
}