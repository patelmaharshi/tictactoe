import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'

export const Header = styled.header`
	text-align: center;
	font-size: 2em;
	font-family: 'Georgia', serif;
	//background-color: Red;
	padding-top: 10px;
	padding-bottom: 20px;
	font-weight: bold;
	font-style: oblique;
	color: black;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	width: 80%;
	min-height: 80vh;
	${media.handheld`
		width: 100%;
	`}
	background-color: #EBF5FB;
	
`

export const Main = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
}
