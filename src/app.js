import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'

import {
	grommet,
	Grommet,
	Box,
	Nav,
	Image,
	Anchor
} from 'grommet'

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

		console.log({json})
			
	}
	render() {
		
		const string = 'test'
		const src = `https://robohash.org/${string}.png?bgset=bg2`
		
		return (
			<Image src={src} fit='cover'/>
		)
	}
}

function App() {
	return (
		<Grommet theme={grommet}>
			<Navigation/>
			<ProfilePic/>
		</Grommet>
	)
}


render(<App/>, document.getElementById('root'))