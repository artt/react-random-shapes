import React from 'react'

import { RandomBlob, RandomHLine } from 'react-random-shapes'

const App = () => {

	const numLines = 12
	const rng = Array.from(new Array(numLines), (x, i) => i)
	const start = Math.random() * 360
	const styles = rng.map(x => {
		return {fill: "transparent", stroke: `hsl(${start + x/numLines*360}, 100%, 50%)`}
	})

  return(
  	<React.Fragment>
  		<div><RandomHLine width={600} height={300} options={{classNameTop: "abc", styleMid: "none"}} /></div>
  		<div><RandomHLine width={600} height={300} options={{debug: true}} /></div>
  		<div><RandomHLine width={600} height={300} options={{numLines: numLines, numControls: 4, debug: false, styleMid: styles}} /></div>
  		<div><RandomBlob size={500} /></div>
		</React.Fragment>
	)
}

export default App
