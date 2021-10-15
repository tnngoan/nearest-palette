const { expect } = require("@jest/globals");

const nearestPalette = require("./nearestPalette");
const nearestColor = require("./nearestPalette");
const distanceToColor = require("./nearestPalette");

const target = "#FFFFFF";
const k = 2;
const palettes = [
  ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
  [target, "#cbe86b", "#f2e9e1", "#1c140d", "#cbe86b"],
  ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b"],
];

test("TEST Distance", () => {
  const res = distanceToColor(target, "#f2e9e1");
  const er = 39.408120990476064;
  expect(res).toBe(er);
});

test("TEST nearest Palettes", () => {
  const res = nearestPalette(target, palettes, k);
  let er = [
    {
      distance: 0,
      palette: ["#FFFFFF", "#cbe86b", "#f2e9e1", "#1c140d", "#cbe86b"],
    },
    {
      distance: 65.50572494064927,
      palette: ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
    },
  ];
  expect(res).toBe(er);
});

test("TEST Nearest Colors", () => {
  let res = nearestColor(target, palettes, k);
  let er = [
    {
      distance: 65.50572494064927,
      colors: [
        { color: "#FFFFFF", distance: 0 },
        { color: "#f2e9e1", distance: 39.408120990476064 },
        { color: "#cbe86b", distance: 158.54652314068574 },
        { color: "#cbe86b", distance: 158.54652314068574 },
        { color: "#1c140d", distance: 406.59316275608967 },
      ],
    },
    {
      distance: 0,
      colors: [
        { color: "#e0e4cc", distance: 65.50572494064927 },
        { color: "#a7dbd8", distance: 102.76672613253767 },
        { color: "#69d2e7", distance: 158.43295111813072 },
        { color: "#f38630", distance: 240.0708228835816 },
        { color: "#fa6900", distance: 295.8884925102698 },
      ],
    },
  ];
  expect(res).toBe(er);
});
