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
import QuoteDisplay from './components/QuoteDisplay'
import VoteButtons from './components/VoteButtons'

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
		
		if (ip) {
			const src = `https://robohash.org/${ip}.png?bgset=bg2`
		
			return (
				<Image src={src} fit='cover'/>
			)	
		} else {
			// skeleton UI could go here
			return (
				<span>Please wait while we fetch your photo...</span>
			)
		}
		
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
					<Navigation/>
					<ProfilePic/>
					<QuoteDisplay/>
					<VoteButtons/>
				</Provider>
			</Grommet>
		)
	}
}


render(<App/>, document.getElementById('root'))