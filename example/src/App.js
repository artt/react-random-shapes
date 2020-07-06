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
  return <RandomHLine width={600} height={300} options={{debug: true}} />
}

export default App
