/**
 * @param {number[]} arr
 * @return {number[]}
 */
module.exports = (arr) => {
  let currMax = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  let length = arr.length - 2;

  for (let i = length; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = currMax;

    if (curr > currMax) {
      currMax = curr;
    }
  }
  return arr;
};
