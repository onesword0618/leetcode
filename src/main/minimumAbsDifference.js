/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let min = arr[1] - arr[0];
  let res = [[arr[0], arr[1]]];
  let n = arr.length;

  for (let i = 1; i < n - 1; i++) {
    let diff = arr[i + 1] - arr[i];

    if (diff === min) {
      res.push([arr[i], arr[i + 1]]);
    } else if (diff < min) {
      min = diff;
      res = [];
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return res;
};
module.exports = minimumAbsDifference;
