import nearestPalette from "./nearestPalette";

let colors1 = [target, "#1F0001"];
let colors2 = ["#2FFFFF", "#2FFFF0"];
let palettes = [colors1, colors2];
let expectedResult = [
  {
    distance: 0,
    color: colors1,
  },
  {
    distance: 350.54386316123123,
    color: colors2,
  },
];

test("PASS", () => {
  expect(nearestPalette(target, palettes).toBe(expectedResult));
});
