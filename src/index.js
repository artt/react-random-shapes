import React from 'react'

function getEndPoints(center, sd, max) {
	
}

export function RandomShape({ width, height, options }) {
	const opt = {
		aEdge: "left",
		aPos: 0.5*height,
		aSD: 0.2,
		bEdge: "right",
		bPos: 0.5*height,
		bSD: 0.2,
		sections: 3,
		...options
	}
	
	console.log(opt)

	const pathString = "M 0 0 "
											+ "L 0 " + opt.aPos + " "
											+ "L " + width + " " + opt.bPos + " "
											+ "L " + width + " 0 "
											+ "Z"
	console.log(pathString) 

  return(
		<svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
			<path d={pathString} fill="red" />
  	</svg>
  )
}
