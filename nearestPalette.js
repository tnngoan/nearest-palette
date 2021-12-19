// top k sorted array of palettes
function nearestPalette(target, palettes, k) {
  let nearestPalettes = [];
  palettes.forEach((palette) => {
    // for each palette in the array of palettes find its every color
    let minDistance = Number.MAX_VALUE;
    palette.forEach((color) => {
      // calculate distance from target color to every color in a palette
      let targetDistance = distanceToColor(target, color);
      // compare distance with a given value - minDistance and assign the smaller to minDistance
      minDistance = Math.min(minDistance, targetDistance);
    });
    // push distance and palette into a new array after every palette
    nearestPalettes.push({ distance: minDistance, palette: palette });
  });
  // sort all the distance in ascending order
  sort(nearestPalettes);
  // return top k palettes we found
  return nearestPalettes.slice(0, k);
}

//top k sorted array of every color in every palette
function nearestColor(target, palettes, k) {
  let nearestColors = [];
  // for each palette in the array of palettes find its every color
  palettes.forEach((palette) => {
    let sortedColors = [];
    let minDistance = Number.MAX_VALUE;
    palette.forEach((color) => {
      // calculate distance from target color to every color in a palette
      let targetDistance = distanceToColor(target, color);
      // compare distance with a given value - minDistance and assign the smaller to minDistance
      minDistance = Math.min(minDistance, targetDistance);
      // sort all the distances from target to every color from palette to an array
      sortedColors.push({ color: color, distance: targetDistance });
    });
    //sort the array in ascending order
    sort(sortedColors);
    // push sorted array in to a new array
    nearestColors.push({ distance: minDistance, colors: sortedColors });
  });
  return nearestColors.slice(0, k);
}

// calculate the distance between 2 colors
function distanceToColor(color1, color2) {
// convert arguments from hex to RGB()  
  color1 = toRGB(color1);
  color2 = toRGB(color2);
  // put arguments's values into arrays
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;
  // calculate the distance using deltaE formula
  const drp2 = Math.pow(r1 - r2, 2);
  const dgp2 = Math.pow(g1 - g2, 2);
  const dbp2 = Math.pow(b1 - b2, 2);
  return Math.sqrt(drp2 + dgp2 + dbp2);
}

function toRGB(target) {
  // using regular expression to check if target is in hex format
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target);
  // if it is then parse its values to get RGB()
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

// Sort function in ascending order
function sort(array) {
  array.sort(function (a, b) {
    return a.distance - b.distance;
  });
}

export { nearestPalette, distanceToColor, nearestColor };
