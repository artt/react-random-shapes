import React from 'react'

import { RandomHLine } from 'react-random-shapes'

const override = [
  {
    angle: ["r", 0, Math.PI / 4]
  },
  "auto",
  "auto",
  {
    x: ["p", 500],
    y: ["r", 10, 15] 
  },
  "auto"
]

const App = () => {
  return(
    <div className="wave-container">
      {[...Array(12).keys()].map(i => {
        return <RandomHLine width={800} height={300} className="wave" options={{styleMid: {fill: "transparent", stroke: `hsl(${i/12*360}, 100%, 40%)`}}} />
      })}
    </div>
  )

  // return <RandomHLine width={600} height={300} options={{numControls: 4, debug: true}} />
}

export default App
