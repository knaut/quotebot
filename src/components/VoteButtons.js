import React, { Component } from 'react'
import Moment from 'moment'
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
import { bindActionCreators } from 'redux'

import { voteUp, voteDown, voteNeutral } from '../actions/quotes'

function mapStateToProps(state, ownProps) {
	const activeIndex = state.activeQuote.index
	const ids = state.quotes.ids

	return {
		activeIndex,
		ids
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({
			voteDown,
			voteNeutral,
			voteUp
		}, dispatch)
	}
}

class VoteButtons extends Component {
	handleVoteDown = () => {
		const { activeIndex, actions, ids } = this.props
		const timestamp = Moment().toISOString()

		actions.voteDown({
			index: activeIndex,
			ids,
			timestamp
		})
	}

	handleVoteNeutral = () => {
		const { activeIndex, actions, ids } = this.props
		const timestamp = Moment().toISOString()

		actions.voteNeutral({
			index: activeIndex,
			ids,
			timestamp
		})
	}

	handleVoteUp = () => {
		const { activeIndex, actions, ids } = this.props
		const timestamp = Moment().toISOString()

		actions.voteUp({
			index: activeIndex,
			ids,
			timestamp
		})
	}

	render() {
		return (
			<Box 
				direction='row-responsive'
				background='brand'
				pad='small'
				css={`
					display: flex;
					justify-content: center;
				`}
			>
				<Anchor 
					css={`flex: 3; text-align: center;`}
					onClick={this.handleVoteDown}
				>Lame</Anchor>
				<Anchor 
					css={`flex: 3; text-align: center;`}
					onClick={this.handleVoteNeutral}
				>Meh...</Anchor>
				<Anchor 
					css={`flex: 3; text-align: center;`}
					onClick={this.handleVoteUp}
				>Great!</Anchor>
			</Box>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButtons)