# @ngoantr/nearest-palette

A search tool to filter out the closest palettes to a color, try out on  [ Vibrant Art](https://vibrant-art-map.netlify.app/)

## Installation

Install with npm as a local dependency (for API) or global (for CLI).

```sh
npm install nearest-palette [-g|--save]
```

## How this work?

nearest-palette calculates the distance from query color to every color in the given palettes to find the closest ones and return the top k closest palettes.

From the Wikipedia article on the subject:

> The simplest solution to the NNS problem is to compute the distance from the query point to every other point in the database, keeping track of the "best so far". This algorithm, sometimes referred to as the naive approach, has a running time of O(Nd) where N is the cardinality of S and d is the dimensionality of M. There are no search data structures to maintain, so linear search has no space complexity beyond the storage of the database. Naive search can, on average, outperform space partitioning approaches on higher dimensional spaces.
> 

## How to use it?

1. With your own colors

<code> var np = require('nearest-palette'); </code>

<code> var items = [
  { colors: ["#00FF00", "#FF00FF"] },
  { colors: ["#100000", "#1F00FF"] },
];

<code> var query = '#FF00FF';
var k = 10;

<code> var res = np.findMostSimilar(query, items, k);

<code> /* res = [
{
{ distance: 0, colors: ["#00FF00", "#FF00FF"] }
 }
] */
</code>

2. With nice-color-palettes

<code> const colors = require("nice-color-palettes");

<code> var query = '#FF00FF';
var k = 10;
var res = np.findMostSimilar(query, items, k);

<code>/* res = [
    {
        { distance: 0, colors: ["#00FF00", "#FF00FF"] }
    }
] */


## Limitations

Currently only support full hex colors. You can't use all CSS colors like: 'red' or '0xFFF' or transparency '0xf1f1f1f1'


## Author

* [Gmail](mailto:ngoan.n.tr@gmail.com)

* [Github](https://github.com/tnngoan)

* [LinkedIn](https://www.linkedin.com/in/tnngoan/)
