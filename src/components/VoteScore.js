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

function mapStateToProps(state, ownProps) {
	const { votes } = state
	const quoteEntities = state.quotes.entities
	const quoteIds = state.quotes.ids

	return {
		votes,
		quoteEntities,
		quoteIds
	}
}

function VoteScoreRow(props) {
	console.log(props)
	const { ups, downs, neutrals, lastVoteTime, quoteId } = props

	return (
		<Box 
			direction='row-responsive'
			css={`
				display: flex;
			`}
		>
			<div css={`flex: 5; text-align: left`}>{quoteId}</div>
			<div css={`flex: 5; text-align: center`}>{ups}</div>
			<div css={`flex: 5; text-align: center`}>{downs}</div>
			<div css={`flex: 5; text-align: center`}>{neutrals}</div>
			<div css={`flex: 5; text-align: center; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;`}>{lastVoteTime}</div>
		</Box>
	)
}

function VoteScore({ votes, quoteEntities, quoteIds }) {
	const rows = []

	for (let i = 0; quoteIds.length > i; ++i) {
		const quoteId = quoteIds[i]
		const tallies = votes[ quoteId ]

		if (tallies.lastVoteTime) {
			rows.push(
				<VoteScoreRow key={quoteId} {...tallies} quoteId={quoteId}/>
			)
		}
	}

	if (rows.length) {
		return (
			<Box>
				<Heading level={3}>
					Your Votes
				</Heading>
				<Box direction='row-responsive' background='light-3'>
					<div css={`flex: 5; text-align: center`}>ID</div>
					<div css={`flex: 5; text-align: center`}>Ups</div>
					<div css={`flex: 5; text-align: center`}>Downs</div>
					<div css={`flex: 5; text-align: center`}>Neutrals</div>
					<div css={`flex: 5; text-align: center`}>Last Voted On</div>
				</Box>
				{rows}
			</Box>
		)
	} else {
		return (
			<Box>No votes yet.</Box>
		)
	}
}

export default connect(mapStateToProps, {})(VoteScore)