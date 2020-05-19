import React, { Component } from 'react'
import { render } from 'react-dom'
import {
	grommet,
	Grommet,
	Box,
	Nav,
	Image,
	Heading,
	Anchor
} from 'grommet'
import { connect } from 'react-redux'

function mapStateToProps(state, ownProps) {
	const { quotes } = state
	const { activeQuote } = state

	const quote = quotes.entities[ activeQuote.index ]

	return {
		isLoaded: activeQuote.index ? true : false,
		quote
	}
}

class QuoteDisplay extends Component {
	render() {
		const { quote, isLoaded } = this.props
		

		if (isLoaded) {
			const quoteString = quote.stripped
			return (
				<Heading level={2}>
					{quoteString}
				</Heading>
			)
		} else {
			return (
				<Heading level={2}>
					Please wait while we fetch quotes...
				</Heading>
			)
		}

	}
}

export default connect(mapStateToProps, {})(QuoteDisplay)