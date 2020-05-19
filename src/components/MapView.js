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
	Anchor,
	WorldMap
} from 'grommet'

export default function Map() {
	const src = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(-122.4033477,37.7904462)/-122.337798,37.810550,9.67,0.00,0.00/500x500@2x?access_token=pk.eyJ1Ijoic2VhbnAiLCJhIjoiY2p1MDY1YmljM2NnMjN6bXVnZXRpeGdvdSJ9.om-OkYVrL4-GyeWA3Evj2g'
	
	return (
		<Image src={src}/>
	)
}

