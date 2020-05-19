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

		let quoteString = false
		
		if (quote) {
			quoteString = quote.stripped	
		}
		
		const copy = quoteString ? (
			<Heading level={2}>
				<span css={`font-style: italic;`}>{quoteString}</span>
			</Heading>
		) : (
			<Heading level={2}>
				Please wait while we fetch quotes...
			</Heading>
		)

		return (
			<Box 
				background='accent-3'
				pad='small'
			>
				{copy}
			</Box>
		)

	}
}

export default connect(mapStateToProps, {})(QuoteDisplay)