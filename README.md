# react-random-shape

Create a random, wavy `svg` image. A few different shapes are planned:

* `RandomHLine`
* `RandomVLine`
* `RandomBlob`

This package was inspired by [blobmaker.app](https://www.blobmaker.app/).

[![NPM](https://img.shields.io/npm/v/react-random-shape.svg)](https://www.npmjs.com/package/react-random-shape) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-random-shape
```

## Usage

```jsx
import React from 'react'

import RandomHLine from 'react-random-shape'

export default function Example() {
  return <RandomHLine width="600" height="300" />
}
```

For all shapes, `width` and `height` attributes are required. Additionally, various options could be specified.

### List of Shapes

#### `RandomHLine`

Generates a horizontal line (going roughly from left to right). Options available are:

Attribute   	| Description       | Default
----------- 	| ----------------- | --------
`leftPos`		| Vertical position of the left handle. | `0.5*height`
`leftRoom`		| Size of the [1-D] window in which `leftPos` could wiggle around. | `0.3*height`
`rightPos`  	| Similar to `leftPos` | `0.5*height`
`rightRoom` 	| Similar to `leftRoom` | `0.3*height`
`sections`		| Number of section the curve will be divided into. | `1`
`midRoom` 		| Size of the [2-D] window in which the middle control points could wiggle around. | `0.2*height`
`angleRoom` 	| Size of the window in which the angle of the control point, as measured from the control point, could wiggle around. | `Math.PI / 3`
`fillTop` 		| Fill of the top part. | `"transparent"`
`fillBottom` 	| Fill of the bottom part. | `"transparent"`
`strokeMid`		| Stroke style of the dividing line. | `"black"`
`showHandles` 	| Show the handles and control points (for debug purpose). | `false`

#### `RandomVLine`

[Not yet available.]

#### `RandomBlob`

[Not yet available.]

## License

MIT © [artt](https://github.com/artt)
