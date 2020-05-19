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
	Video
} from 'grommet'

export default function QuoteAudio() {
	const src = 'http://api.voicerss.org/?key=0bb282d009b0476f9790b9b76954f35e&src=T%20o+buy+books+would+be+a+good+thing+if+we+also+could+buy+the+time+to+%20read+them.&hl=en-us'
	
	return (
		<Video controls='over'>
			<source src={src} type='audio/wav'/>
		</Video>
	)
}

