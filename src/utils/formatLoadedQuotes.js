import stripHtml from 'string-strip-html'

export default function formatLoadedQuotes(array) {
	// normalize the array of quotes
	const entities = {}
	const ids = []

	for (let i = 0; array.length > i; ++i) {
		const entity = array[i]

		const stripped = stripHtml( entity.content.rendered )
		entity.stripped = stripped

		const entityKey = entity.id

		entities[ entityKey ] = entity

		ids.push(entityKey)
	}

	return { entities, ids }
}