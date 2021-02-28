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
  		<div>
				Example with class name and seed
				<div>
	  			<RandomHLine width={600} height={300} options={{classNameTop: "abc", seed: "hello!"}} />
  			</div>
  		</div>
  		<div>
  			Example with debug turned on, showing handles
  			<div>
	  			<RandomHLine width={600} height={300} options={{debug: true}} />
  			</div>
  		</div>
  		<div>
  			Example with multiple lines
  			<div>
  				<RandomHLine width={600} height={300} options={{numLines: numLines, numControls: 4, debug: false, styleMid: styles}} />
  			</div>
  		</div>
  		<div>
  			Example with blob
  			<div>
  				<RandomBlob size={500} className="svg-blob" options={{style: {fill: "blue"}}} />
  			</div>
  		</div>
      <div>
        Example with three blobs
        <div>
          <RandomBlob size={500} className="svg-blob" options={{numBlobs: 3, style: {stroke: "green", fill: "none"}}} />
        </div>
      </div>
		</React.Fragment>
	)
}

export default App
