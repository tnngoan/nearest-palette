# @ngoantr/nearest-palette

Brute for nearest neighbor color-space search to identify palettes that contain a color similar to the searched color. [ Vibrant Art](https://vibrant-art-map.netlify.app/) leverages this to generate pretty colored digital art with a single color.

![example](https://github.com/tnngoan/nearest-palette/blob/main/photo.png)

## Installation

Install with npm as a local dependency (for API) or global (for CLI).

```sh
npm install nearest-palette [-g|--save]
```

## How does this work?

Big picture: _nearest-palette_ calculates the distance from a color to every color in the given palettes to find the closest ones and return the top k closest palettes.

Given an array of color palettes or import from [_nice-color-palettes_](https://www.npmjs.com/package/nice-color-palettes#:~:text=4%20Versions-,nice-color-palettes,-A%20JSON%20of) and a target color in hex. _nearest-palette_ will return a list of (k) palettes and their distances to target, every color in these palettes may or may not be sorted in ascending order.

From the Wikipedia article on the subject:

> The simplest solution to the NNS problem is to compute the distance from the query point to every other point in the database, keeping track of the "best so far". This algorithm, sometimes referred to as the naive approach, has a running time of O(Nd) where N is the cardinality of S and d is the dimensionality of M. There are no search data structures to maintain, so linear search has no space complexity beyond the storage of the database. Naive search can, on average, outperform space partitioning approaches on higher dimensional spaces.

## Quick start:

1. With your own colors

```javascript

import { nearestColor } from "nearest-palette";

var k = 2;
var query = '#e0e0e0';
var items = [
  ["#f38630", "#fa6900"],
  ["#69d2e7", "#a7dbd8", "#e0e4cc"],
  ["#c02942", "#542437", "#53777a"],
  ["#ecd078", "#d95b43"],
];

var result = nearestColor(query, items, k);

/*

result = [
  {
    "distance": 198.58751219550538,
    "colors": [
      {
        "color": "#f38630",
        "distance": 198.58751219550538
      },
      {
        "color": "#fa6900",
        "distance": 254.9764695025798
      }
    ]
  },
  {
    "distance": 20.396078054371138,
    "colors": [
      {
        "color": "#e0e4cc",
        "distance": 20.396078054371138
      },
      {
        "color": "#a7dbd8",
        "distance": 57.77542730261716
      },
      {
        "color": "#69d2e7",
        "distance": 120.02499739637572
      }
    ]
  }
];
 
*/

```

2. With [nice-color-palettes](https://www.npmjs.com/package/nice-color-palettes)

```javascript

// get top k sorted array of every color in every palette

import { nearestPalette } from "nearest-palette";

var k = 3;
var query = '#e0e0e0';
var colors = require("nice-color-palettes");

var result = nearestPalette(query, colors, k);

/*

[
  {
    "distance": 13.19090595827292,
    "palette": [
      "#d9ceb2",
      "#948c75",
      "#d5ded9",
      "#7a6a53",
      "#99b2b7"
    ]
  },
  {
    "distance": 13.45362404707371,
    "palette": [
      "#2d2d29",
      "#215a6d",
      "#3ca2a2",
      "#92c7a3",
      "#dfece6"
    ]
  },
  {
    "distance": 13.856406460551018,
    "palette": [
      "#f6f6f6",
      "#e8e8e8",
      "#333333",
      "#990100",
      "#b90504"
    ]
  }
];

*/

```

## Test

```
$ npm run test 
```

## Limitations

Currently only support full hex colors. You can't use all CSS colors like: `'red'` or `'0xFFF'` or transparency `'0xf1f1f1f1'`.

## Author

- [Gmail](mailto:ngoan.n.tr@gmail.com)

- [Github](https://github.com/tnngoan)

- [LinkedIn](https://www.linkedin.com/in/tnngoan/)
