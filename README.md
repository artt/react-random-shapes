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

## List of Shapes

### `RandomHLine`

Generates a horizontal line (going roughly from left to right). Options available are:

Attribute   | Description       | Default
----------- | ----------------- | --------
`leftPos`	| Vertical position of the left handle. | `0.5*height`
`leftRoom`	| The size of the window in which `leftPos` could wiggle around. | `0.3*height`

<!-- `rightPos` 0.5*height,
`rightSD` 0.3*height,
`midSD` 0.2*height,
`angleSD` Math.PI / 3,
`sections` 1,
`fillTop` "transparent",
`fillBottom` "transparent",
`showHandles` false,
		...options -->

### `RandomVLine`

[Not yet available.]

### `RandomBlob`

[Not yet available.]

## License

MIT © [artt](https://github.com/artt)
