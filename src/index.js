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
		minDistance = Math.min(
			minDistance,
			Math.sqrt(Math.pow(a[i][0] - a[i+1][0], 2) + Math.pow(a[i][1] - a[i+1][1], 2))
		)
	}
	return minDistance
}

function movePoint(x, y, rho, r) {
	console.log(x, y, rho, r)
	return [x + r * Math.cos(rho), y + r * Math.sin(rho)]
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
	const angle = Math.atan(slope)

	const pts_center_x = [...Array(opt.sections + 1).keys()].map(x => x / opt.sections * width)

	function jitter(posX, posY, sdX, sdY, minX=0, maxX=width, minY=0, maxY=height) {
		const tmpX = posX + (Math.random() * 2 * sdX) - sdX
		const tmpY = posY + (Math.random() * 2 * sdY) - sdY
		return [truncate(tmpX, minX, maxX), truncate(tmpY, minY, maxY)]
	}

	const cPoints = [[0, finalA]]
		.concat(pts_center_x.slice(1, pts_center_x.length-1).map(x => jitter(x, getY(x, slope, finalA), opt.sd, opt.sd)))
		.concat([[width, finalB]])

	const distance = getMinDistance(cPoints, 2 * Math.max(width, height))
	console.log("distance", distance)	
	console.log("angle", angle)
	let ctrlPoints = cPoints.map(xy => movePoint(xy[0], xy[1], angle, -1 * distance / 2))
	// edit ctrlPoints[0]
	ctrlPoints[0] = movePoint(cPoints[0][0], cPoints[0][1], angle, distance / 2)
	console.log("ctrlPoints", ctrlPoints)

	let pathString = "M 0 0 "
											+ "V " + finalA + " "
											+ "C " + ctrlPoints[0][0] + " " + ctrlPoints[0][1] + ", " + ctrlPoints[1][0] + " " + ctrlPoints[1][1] + ", " + cPoints[1][0] + " " + cPoints[1][1] + " "
	// at this point we're done with the first two cPoints
	for (let i = 2; i < cPoints.length; i ++) {
		pathString += "S " + ctrlPoints[i][0] + " " + ctrlPoints[i][1] + ", " + cPoints[i][0] + " " + cPoints[i][1]
	}
	pathString += "V 0 Z"
	console.log(pathString) 

  return(
		<svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
			<path d={pathString} fill="red" />
			{
				// center points
				cPoints.map(xy => <circle cx={xy[0]} cy={xy[1]} r={4} />)
			}
			{
				// control points
				ctrlPoints.map(xy => <circle cx={xy[0]} cy={xy[1]} r={2} />)
			}
  	</svg>
  )
}
