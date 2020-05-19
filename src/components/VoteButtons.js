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
import { bindActionCreators } from 'redux'

import { voteUp, voteDown, voteNeutral } from '../actions/quotes'

function mapStateToProps(state, ownProps) {
	const activeIndex = state.activeQuote.index

	return {
		activeIndex
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
		const { activeIndex, actions } = this.props

		actions.voteDown({
			index: activeIndex
		})
	}

	handleVoteNeutral = () => {
		const { activeIndex, actions } = this.props

		actions.voteNeutral({
			index: activeIndex
		})
	}

	handleVoteUp = () => {
		const { activeIndex, actions } = this.props

		actions.voteUp({
			index: activeIndex
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