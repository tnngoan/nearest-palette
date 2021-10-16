# @ngoantr/nearest-palette

A search tool to filter out the closest palettes to a color, try out on [ Vibrant Art](https://vibrant-art-map.netlify.app/)

## Installation

Install with npm as a local dependency (for API) or global (for CLI).

```sh
npm install nearest-palette [-g|--save]
```

## How this work?

Big picture: _nearest-palette_ calculates the distance from a color to every color in the given palettes to find the closest ones and return the top k closest palettes.

Given an array of color palettes or import from [_nice-color-palettes_](https://www.npmjs.com/package/nice-color-palettes#:~:text=4%20Versions-,nice-color-palettes,-A%20JSON%20of) and a target color in hex. _nearest-palette_ will return a list of (k) palettes and the its distance to target, every color in these palettes may or may not be sorted in ascending order.

From the Wikipedia article on the subject:

> The simplest solution to the NNS problem is to compute the distance from the query point to every other point in the database, keeping track of the "best so far". This algorithm, sometimes referred to as the naive approach, has a running time of O(Nd) where N is the cardinality of S and d is the dimensionality of M. There are no search data structures to maintain, so linear search has no space complexity beyond the storage of the database. Naive search can, on average, outperform space partitioning approaches on higher dimensional spaces.

## How to use it?

1. With your own colors

<code>

import prettyPalette from "nearest-palette";

var k = 1;
var query = '#FF00FF';
var items = [
["#00FF00", "#FF00FF"],
["#100000", "#1F00FF"]
];

var res = prettyPalette(query, items, k);

//_
res = [
{
{ distance: 0,
colors: ["#00FF00", "#FF00FF"]
}
}
]
_//

</code>

2. With [nice-color-palettes](https://www.npmjs.com/package/nice-color-palettes)

<code>

// get top k sorted array of every color in every palette

import prettyPalette from "nearest-palette";

var k = 10;
var query = '#FF00FF';
var colors = require("nice-color-palettes");

var res = prettyPalette(query, colors, k);

//\_

res = [  
 {
"minD": 0,
"pal": [
{
"targetDistance": 259.5399776527693,
"color": "#fffcdd"
},
{
"targetDistance": 255.79093025359597,
"color": "#dcf7f3"
},
{
"targetDistance": 235.18928547023566,
"color": "#ffd8d8"
},
{
"targetDistance": 169.03845716285983,
"color": "#f5a2a2"
},
{
"targetDistance": 0,
"color": "#805841"
}
]  
 }  
 ]

\_//

</code>

## Test

<code> npm run test </code>

## Limitations

Currently only support full hex colors. You can't use all CSS colors like: `'red'` or `'0xFFF'` or transparency `'0xf1f1f1f1'`.

## Author

- [Gmail](mailto:ngoan.n.tr@gmail.com)

- [Github](https://github.com/tnngoan)

- [LinkedIn](https://www.linkedin.com/in/tnngoan/)
