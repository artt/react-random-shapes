import React from 'react'
import styles from './styles.module.css'

function foo(width, height) {
	return(
  	<svg width={width} height={height}>
	  	<rect x="0" y="0" width={width} height={height}
			  style={{fill:"green", stroke:"orange", strokeWidth:5, fillOpacity:0.1, strokeOpacity:0.9}} />
  		<circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
  	</svg>
  )
}

const optionsDefault = {
	endA: "left",
	endB: "right"
}

export function RandomShape({ width, height, options }) {
	const opt = {...optionsDefault, ...options}
	console.log(opt)
  return foo(width, height)
}
