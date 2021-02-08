import React from 'react'
import {genBlob, genHLines} from 'random-shapes'

function getPointAttribute(pt, pattern) {
	let tmp = {}
	tmp[pattern.replace("?", "x")] = pt.x.toFixed(2)
	tmp[pattern.replace("?", "y")] = pt.y.toFixed(2)
	return tmp
}

function renderControlPoints(data) {
	return(
		<React.Fragment>
			{data.map((x, i) => {
				return(
					<React.Fragment key={"group " + i}>
						<line {...getPointAttribute(x.ctrl, "?1")} {...getPointAttribute(x.ctrl_alt, "?2")} key={"line " + i} stroke="blue" />
						<circle {...getPointAttribute(x.point, "c?")} r={4} key={"center " + i} />
						<circle {...getPointAttribute(x.ctrl, "c?")} r={2} key={"control " + i} />
						<circle {...getPointAttribute(x.ctrl_alt, "c?")} r={2} key={"control_alt " + i} />
					</React.Fragment>
				)
			})}
		</React.Fragment>
	)
}

export function RandomHLine({ width, height, options, override, className }) {

	// Override is an array of objects.
	// If the entry at position i is null, undefined, or "auto", then default is applied.
	// Each non-auto entry is an object with 3 possible keys: x, y, and angle.
	// Each key has a value that's an array (or null). The first element of the array
	// is the "mode" of overriding. There are 3 possible (non-null) modes:
	// 	- null, undefined, or "auto"
	// 	- ["p", value]: specify the exact value
	// 	- ["w", value]: specify the size of the window
	// 	- ["r", l_bound, u_bound]: specify the minimum and maximum values
	
	const opt = {
		numLines: 1,
		styleMid: {fill: "transparent", stroke: "black"},
		styleTop: "none",
		styleBottom: "none",
		classNameTop: "",
		classNameBottom: "",
		classNameMid: "",
		seed: '',
		debug: false,
		...options
	}

	if (opt.styleTop !== "none" && !Array.isArray(opt.styleTop)) opt.styleTop = [opt.styleTop]
	if (opt.styleBottom !== "none" && !Array.isArray(opt.styleBottom)) opt.styleBottom = [opt.styleBottom]
	if (opt.styleMid !== "none" && !Array.isArray(opt.styleMid)) opt.styleMid = [opt.styleMid]
	if (opt.debug){
		console.log(opt.styleMid[0 % opt.styleMid.length])
	}

	const r = genHLines(width, height, opt, override)
	return(
		<svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}
				version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg"
				className={className}>
			{
				r.map(({data, curve}, i) => {
					return (
						<React.Fragment key={"line" + i}>
							{(opt.styleTop !== "none" || opt.classNameTop) &&
								<path d={curve + " V 0 H 0 Z"}
									style={opt.styleTop !== "none" ? opt.styleTop[i % opt.styleTop.length] : {}} className={opt.classNameTop} />
							}
							{(opt.styleBottom !== "none" || opt.classNameBottom) &&
								<path d={curve + ` V ${height} H 0 Z`}
									style={opt.styleBottom !== "none" ? opt.styleBottom[i % opt.styleBottom.length] : {}} className={opt.classNameBottom} />
							}
							{(opt.styleMid !== "none" || opt.classNameMid) &&
								<path d={curve}
									style={opt.styleMid !== "none" ? opt.styleMid[i % opt.styleMid.length] : {}} className={opt.classNameMid} />
							}
							{opt.debug && renderControlPoints(data)}
						</React.Fragment>
					)
				})
			}
		</svg>
	)

}

export function RandomBlob({ size, options, className }) {
	
	const opt = {
		numBlobs: 1,
		style: {fill: "red"},
		className: "",
		seed: '',
		debug: false,
		...options
	}

	const blobs = genHBlobs(size, opt);

	const rendered = []
	for (let i = 0; i < blobs.length; i += 1) {
		rendered.push(
			<path d={blobs[i].path} style={opt.style} className={opt.className} />
		)
		if (opt.debug) {
			rendered.push(renderControlPoints(blobs[i].data))
		}
  }

	return(  
		<svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}
				version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg"
				className={className}>
		  {rendered}
		</svg>
	)

}
