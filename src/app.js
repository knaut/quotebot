import 'babel-polyfill'

// REACT
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

import {
	Robot
} from 'grommet-icons'

import QuoteDisplay from './components/QuoteDisplay'
import VoteButtons from './components/VoteButtons'
import VoteScore from './components/VoteScore'
import MapView from './components/MapView'
import QuoteAudio from './components/QuoteAudio'

// REDUX
import { Provider } from 'react-redux' 
import generateStore from './utils/generateStore'

 import { QUOTES_LOADED } from './actions/quotes'

import formatLoadedQuotes from './utils/formatLoadedQuotes'




const store = generateStore()

function Navigation() {
	return (
		<Nav
			direction='row'
			background='brand'
			pad='small'
			css={`
				display: flex;
				justify-content: center;
			`}
		>
			<Anchor hoverIndicator css={`flex: 2; text-align: center;`}>Read this Quote</Anchor>
			<Anchor hoverIndicator css={`flex: 2; text-align: center;`}>Show Past Quotes</Anchor>
		</Nav>
	)
}

class ProfilePic extends Component {
	state = {
		ip: null
	}

	async componentDidMount() {
		const response = await fetch('http://ip-api.com/json')
		const json = await response.json()
		const { query } = json

		this.setState({ ip: query })
			
	}
	render() {
		const { ip } = this.state
		const src = `https://robohash.org/${ip}.png?bgset=bg2`

		const result = ip ? (
			<Image src={src} fit='cover'/>
		) : (
			<span>Please wait while we fetch your photo...</span>
		)

		return (
			<Box css={`min-height: 50vh`}>
				{result}
			</Box>
		)
	}
}


class App extends Component {
	async componentDidMount() {
		const randomNumber = Math.random() * 10
		const url = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_pa ge=10&cacheBust=${randomNumber}`

 		const response = await fetch(url)
 		const json = await response.json()

 		const normalized = formatLoadedQuotes(json)

		store.dispatch({
			type: QUOTES_LOADED,
			payload: normalized
		})

	}

	render() {
		return (
			<Grommet theme={grommet}>
				<Provider store={store}>
					{/* made redundant <Navigation/> */}
					<Box 
						background='accent-2'
						css={`
							justify-content: center;
    					display: flex;
    				`}
					>

						<Heading level={1} css={`
							display: inline-flex;
					    width: fit-content;
					    margin: 25px auto;
						`}>
							<Robot color='brand' size='large'/>Welcome to Quotebot!
						</Heading>
					</Box>
					<ProfilePic/>
					<MapView/>
					<QuoteDisplay/>
					<QuoteAudio/>
					<VoteButtons/>
					<VoteScore/>
				</Provider>
			</Grommet>
		)
	}
}


render(<App/>, document.getElementById('root'))