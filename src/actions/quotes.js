export const QUOTES_LOADED = 'QUOTES_LOADED'
export const QUOTE_VOTE_UP = 'QUOTE_VOTE_UP'
export const QUOTE_VOTE_DOWN = 'QUOTE_VOTE_DOWN'
export const QUOTE_VOTE_NEUTRAL = 'QUOTE_VOTE_NEUTRAL'

export function voteUp(payload) {
	return {
		type: QUOTE_VOTE_UP,
		payload
	}
}

export function voteDown(payload) {
	return {
		type: QUOTE_VOTE_DOWN,
		payload
	}
}

export function voteNeutral(payload) {
	return {
		type: QUOTE_VOTE_NEUTRAL,
		payload
	}
}