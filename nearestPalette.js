function nearestPalette(hex, colors) {
  const distances = closestColor(toRGB(hex), colors);
  const tops = distances.sort(function (a, b) {
    return a.minD - b.minD;
  });
  return tops.slice(0, 10);
}

//hex to rgb converter
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

//distance between 2 colors
function colorDiff(color1, color2) {
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;
  const drp2 = Math.pow(r1 - r2, 2);
  const dgp2 = Math.pow(g1 - g2, 2);
  const dbp2 = Math.pow(b1 - b2, 2);
  return Math.sqrt(drp2 + dgp2 + dbp2);
}

function closestColor(target, colors) {
  let res = [];
  colors.forEach((palette) => {
    let minDistance = Number.MAX_VALUE;
    let tD = [];
    palette.forEach((color) => {
      let targetDistance = colorDiff(target, toRGB(color));
      minDistance = Math.min(minDistance, targetDistance);
      tD.push({ targetDistance, color });
    });
    tD.sort(function (a, b) {
      return b.targetDistance - a.targetDistance;
    });
    res.push({ minD: minDistance, pal: tD });
  });
  return res;
}

export default nearestPalette;
