import React from 'react'

function getEndPoints(center, sd, xMin, xMax) {
	const tmp = center + (Math.random() * 2 * sd) - sd
	return Math.min(Math.max(tmp, xMin), xMax)
}

function getY(xpos, slope, intercept) {
		return xpos * slope + intercept
	}

function truncate(pos, posMin, posMax) {
	return Math.min(Math.max(pos, posMin), posMax)
}

function getMinDistance(a, startMin) {
	console.log("--", a)
	let minDistance = startMin
	for (let i = 0; i < a.length - 1; i ++) {
		// console.log(Math.sqrt(Math.pow(a[i][0] - a[i+1][0], 2) + Math.pow(a[i][1] - a[i+1][1], 2)))
		minDistance = Math.min(minDistance,
														Math.sqrt(Math.pow(a[i][0] - a[i+1][0], 2) + Math.pow(a[i][1] - a[i+1][1], 2)))
	}
	return minDistance
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
	const pts_center_y = pts_center_x.map(x => getY(x, slope, finalA))

	function jitter(posX, posY, sdX, sdY, minX=0, maxX=width, minY=0, maxY=height) {
		// console.log(posX, posY, sdX, sdY)
		const tmpX = posX + (Math.random() * 2 * sdX) - sdX
		const tmpY = posY + (Math.random() * 2 * sdY) - sdY
		// console.log(tmpX, tmpY)
		return [truncate(tmpX, minX, maxX), truncate(tmpY, minY, maxY)]
	}

	const cPoints = [[0, finalA]]
		.concat(pts_center_x.slice(1, pts_center_x.length-1).map(x => jitter(x, getY(x, slope, finalA), opt.sd, opt.sd)))
		.concat([[width, finalB]])

	console.log(getMinDistance(cPoints, 2 * Math.max(width, height)))

	const pathString = "M 0 0 "
											+ "V " + getEndPoints(opt.aPos, opt.aSD, 0, height) + " "
											+ cPoints.map(x => "L " + x[0] + " " + x[1])
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
