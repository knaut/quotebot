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

// REDUX
import { Provider } from 'react-redux' 
import generateStore from './utils/generateStore'
import { QUOTES_LOADED } from './actions/quotes'


const store = generateStore()
console.log({store})

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
			<Anchor hoverIndicator>Read this Quote</Anchor>
			<Anchor hoverIndicator>Show Past Quotes</Anchor>
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

class QuoteDisplay extends Component {
	

	render() {
		const quote = 'Id proident fugiat non labore ut ea pariatur esse consequat ut nulla ad.'
		return (
			<Heading level={2}>
				{quote}
			</Heading>
		)
	}
}


class App extends Component {
	async componentDidMount() {
		const randomNumber = Math.random() * 10
		const url = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_pa ge=10&cacheBust=${randomNumber}`

 		const response = await fetch(url)
 		const json = await response.json()

		store.dispatch({
			type: QUOTES_LOADED,
			payload: json
		})
 
	}

	render() {
		return (
			<Grommet theme={grommet}>
				<Navigation/>
				<ProfilePic/>
			</Grommet>
		)
	}
}


render(<App/>, document.getElementById('root'))