# react-random-shapes

![Wave](./wave.svg)

Create random, wavy `svg` shapes. Two available shapes as of now are:

* [`RandomHLine`](#randomhline)
* [`RandomBlob`](#randomblob)

[![NPM](https://img.shields.io/npm/v/react-random-shapes.svg)](https://www.npmjs.com/package/react-random-shapes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

You can see a demo on [my site](https://artt.github.io/) at both the top of the page and in the footer.

> Note: in v0.4.0, the "core" component was factored out to the [`random-shapes`](https://www.npmjs.com/package/random-shapes) package.

## Install

```bash
npm install --save react-random-shapes
```

## Example Usage

```jsx
import React from 'react'

import { RandomHLine, RandomBlob } from 'react-random-shapes'

export default function Example() {
  return(
    <React.Fragment>
      <RandomHLine width={600} height={300} />
      <RandomBlob size={500} />
    </React.Fragment>
  )
}
```

## `RandomHLine`

Generate a horizontal line (going roughly from left to right). `width` and `height` attributes are required.

### Options

Options available are:

* `numLines` (default `1`) Number of random lines to be shown.
* `leftPos` (default `0.5*height`) Vertical position of the left handle.
* `rightPos` (default `0.5*height`) Similar to `leftPos`.
* `posWindowSize` (default `0.2*height`) Size of the square in which the control points could wiggle around.
* `angleWindowSize` (default `Math.PI/3`) Size of the window in which the angle of the control line (measured from the control point) could wiggle around.
* `numControls` (default `2`) Number of control points the line should have.
* `styleMid` (default `{fill: "transparent", stroke: "black"}`) Style of the mid-line part. For different styles for each line, use an array of style objects.
* `styleTop` (default `"none"`) Style of the top part.
* `styleBottom` (default `"none"`) Style of the bottom part.
* `classNameTop` (default `""`) Class name for the top part.
* `classNameBottom` (default `""`) Class name for the bottom part.
* `classNameMid` (default `""`) Class name for the mid-line part.
* `debug` (default `false`) Show the handles and control points, as well as console printouts for debug purpose.

### Overriding

For more flexibility, you could "override" these points by adding the `override` attribute.
This should be an array of the same length as the number of control points (the length of the `override` array will override if this is not true.)
Each entry represents the override for each control point.
If the entry is `null`, `undefined`, or `"auto"`, there will be no overriding.
To override, the entry must be an object with 3 possible keys: `x`, `y`, and `angle`.
Each key's value will specify the override mode for that control point.
There are 4 possible modes:

* `null`, `undefined`, or `"auto"`
* `["p", value]`: specify the exact value of that key.
* `["w", value]`: specify the size of the window while having the center position automatically adjusted.
* `["r", l_bound, u_bound]`: specify the lower and upper boundries for that key.

Below is an example of an `override` array.

```js
override = [
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
```

## `RandomBlob`

Generate a blob (circle-ish shape). `size` attribute is required.

### Options

Options available are:

* `numControls` (default `3`) Number of control points the blob should have.
* `posWindowSize` (default `0.1*size`) Radius of the circle in which the control points could wiggle around.
* `angleWindowSize` (default `Math.PI/3`) Size of the window in which the angle of the control line could wiggle around.
* `handleWindowSize` (default `0.5`)
* `style` (default `{fill: "grey"}`) Style of the blob.
* `className` (default `""`) Class name for the blob.
* `debug` (default `false`) Show the handles and control points, as well as console printouts for debug purpose.

## Todo's

* Accept required attributes as strings.
* For `RandomHLine`, calculate slope based on two closest fixed points.
* Add API that will generate random, wavy svg's for all!

## Acknowledgements

This package was inspired by [blobmaker.app](https://www.blobmaker.app/).

## License

MIT © [artt](https://github.com/artt)
