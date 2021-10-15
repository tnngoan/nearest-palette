// top k sorted array of palettes
module.exports = function nearestPalette(target, palettes, k) {
  let nearestPalettes = [];
  palettes.forEach((palette) => {
    let minDistance = Number.MAX_VALUE;
    palette.forEach((color) => {
      let targetDistance = distanceToColor(target, color);
      minDistance = Math.min(minDistance, targetDistance);
    });
    nearestPalettes.push({ distance: minDistance, palette: palette });
  });
  sort(nearestPalettes);
  return nearestPalettes.slice(0, k);
};

//top k sorted array of every color in every palette
module.exports = function nearestColor(target, palettes, k) {
  let nearestColors = [];
  palettes.forEach((palette) => {
    let sortedColors = [];
    let minDistance = Number.MAX_VALUE;
    palette.forEach((color) => {
      let targetDistance = distanceToColor(target, color);
      minDistance = Math.min(minDistance, targetDistance);
      sortedColors.push({ color: color, distance: targetDistance });
    });
    sort(sortedColors);
    nearestColors.push({ distance: minDistance, colors: sortedColors });
  });
  return nearestColors.slice(0, k);
};

// calculate the distance between 2 colors
module.exports = function distanceToColor(color1, color2) {
  console.log("before rgb",color2)
  color1 = toRGB(color1);
  color2 = toRGB(color2);
  console.log("see color2",color2);
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;
  const drp2 = Math.pow(r1 - r2, 2);
  const dgp2 = Math.pow(g1 - g2, 2);
  const dbp2 = Math.pow(b1 - b2, 2);
  return Math.sqrt(drp2 + dgp2 + dbp2);
};

function toRGB(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

function sort(array) {
  array.sort(function (a, b) {
    return a.distance - b.distance;
  });
}
