import React from 'react'

import { RandomShape } from 'random-shape'
import 'random-shape/dist/index.css'

const App = () => {
  return <RandomShape width={400} height={100} options={{aEdge: "top"}}/>
}

export default App
