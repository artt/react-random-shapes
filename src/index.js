import React from 'react'

function getEndPoints(center, sd, xMin, xMax) {
	const tmp = center + (Math.random() * 2 * sd) - sd
	return Math.min(Math.max(tmp, xMin), xMax)
}

export function RandomShape({ width, height, options }) {
	const opt = {
		aEdge: "left",
		aPos: 0.5*height,
		aSD: 0.2*height,
		bEdge: "right",
		bPos: 0.5*height,
		bSD: 0.2*height,
		sections: 3,
		...options
	}
	
	console.log(opt)

	const pathString = "M 0 0 "
											+ "L 0 " + getEndPoints(opt.aPos, opt.aSD, 0, height) + " "
											+ "L " + width + " " + getEndPoints(opt.bPos, opt.bSD, 0, height) + " "
											+ "L " + width + " 0 "
											+ "Z"
	console.log(pathString) 

  return(
		<svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
			<path d={pathString} fill="red" />
  	</svg>
  )
}
