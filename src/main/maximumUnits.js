/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
module.exports = maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let ans = 0;
  for (const [count, units] of boxTypes) {
    const takeBoxes = Math.min(count, truckSize);
    ans += takeBoxes * units;
    truckSize -= takeBoxes;
    if (truckSize === 0) {
      break;
    }
  }
  return ans;
};
