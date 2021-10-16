# @ngoantr/nearest-palette

A search tool to filter out the closest palettes to a color, try out on  [ Vibrant Art](https://vibrant-art-map.netlify.app/)

## Installation

Install with npm as a local dependency (for API) or global (for CLI).

```sh
npm install nearest-palette [-g|--save]
```

## How this work?

Big picture: *nearest-palette* calculates the distance from a color to every color in the given palettes to find the closest ones and return the top k closest palettes.

Given an array of color palettes or import from (*nice-color-palettes*)[https://www.npmjs.com/package/nice-color-palettes#:~:text=4%20Versions-,nice-color-palettes,-A%20JSON%20of] and a target color in hex. *nearest-palette* will return a list of (k) palettes and the its distance to target, every color in these palettes may or may not be sorted in ascending order.

From the Wikipedia article on the subject:

> The simplest solution to the NNS problem is to compute the distance from the query point to every other point in the database, keeping track of the "best so far". This algorithm, sometimes referred to as the naive approach, has a running time of O(Nd) where N is the cardinality of S and d is the dimensionality of M. There are no search data structures to maintain, so linear search has no space complexity beyond the storage of the database. Naive search can, on average, outperform space partitioning approaches on higher dimensional spaces.
> 

## How to use it?

1. With your own colors

<code>
var items = [
  { colors: ["#00FF00", "#FF00FF"] },
  { colors: ["#100000", "#1F00FF"] },
]; </code>

<code> var query = '#FF00FF'; </code>
<code> var k = 10; </code>

<code> var res = np.findMostSimilar(query, items, k); </code>

<code> /* res = [
{
{ distance: 0, colors: ["#00FF00", "#FF00FF"] }
 }
] */
</code>

2. With [nice-color-palettes](https://www.npmjs.com/package/nice-color-palettes)

<code>
const colors = require("nice-color-palettes"); </code>

<code> var query = '#FF00FF';
var k = 10; </code>

<code> var res = np.findMostSimilar(query, items, k); </code>

<code> /* res = [
    {
        { distance: 0, colors: ["#00FF00", "#FF00FF"] }
    }
] */
</code>

## Test

<code> npm run test </code>

## Limitations

Currently only support full hex colors. You can't use all CSS colors like: `'red'` or `'0xFFF'` or transparency `'0xf1f1f1f1'`.


## Author

* [Gmail](mailto:ngoan.n.tr@gmail.com)

* [Github](https://github.com/tnngoan)

* [LinkedIn](https://www.linkedin.com/in/tnngoan/)
