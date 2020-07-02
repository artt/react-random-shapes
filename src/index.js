import React from 'react'

function getEndPoints(center, sd, xMin, xMax) {
	const tmp = center + (Math.random() * 2 * sd) - sd
	return Math.min(Math.max(tmp, xMin), xMax)
}

function truncate(pos, posMin, posMax) {
	return Math.min(Math.max(pos, posMin), posMax)
}

export function RandomShape({ width, height, options }) {

	const opt = {
		aEdge: "left",
		aPos: 0.5*height,
		aSD: 0.2*height,
		bEdge: "right",
		bPos: 0.5*height,
		bSD: 0.2*height,
		sd: 0.1*height,
		sections: 3,
		...options
	}
	
	console.log(opt)

	const finalA = getEndPoints(opt.aPos, opt.aSD, 0, height)
	const finalB = getEndPoints(opt.bPos, opt.bSD, 0, height)
	const slope = (finalB - finalA) / width
	const pts_center_x = [...Array(opt.sections + 1).keys()].map(x => x / opt.sections * width)
	const pts_center_y = pts_center_x.map(x => x * slope + finalA)

	function jitter(posX, posY, sdX, sdY, minX=0, maxX=width, minY=0, maxY=height) {
		const tmpX = posX + (Math.random() * 2 * sdX) - sdX
		const tmpY = posY + (Math.random() * 2 * sdY) - sdY
		return [truncate(tmpX, minX, maxX), truncate(tmpY, minY, maxY)]
	}

	function getY(xpos) {
		return xpos * slope + finalA
	}

	const pathString = "M 0 0 "
											+ "V " + getEndPoints(opt.aPos, opt.aSD, 0, height) + " "
											+ pts_center_x.map((x, i) => {
													if (i > 0 && i < opt.sections) {
														const [jX, jY] = jitter(x, getY(x), opt.sd, opt.sd)
														return("L " + jX + " " + jY + " ");
													}
													return ""
												})
											+ "L " + width + " " + getEndPoints(opt.bPos, opt.bSD, 0, height) + " "
											+ "V 0 "
											+ "Z"
	console.log(pathString) 

  return(
		<svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
			<path d={pathString} fill="red" />
  	</svg>
  )
}
