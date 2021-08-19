/**
 * @param {number[]} arr
 * @return {number}
 */
const mctFromLeafValues = function (arr) {
  let result = 0;

  while (arr.length > 1) {
    let min = Math.min(...arr);
    let min_index = arr.indexOf(min);

    if (0 < min_index && min_index < arr.length - 1) {
      result += Math.min(arr[min_index - 1], arr[min_index + 1]) * min;
    } else {
      result +=
        (min_index === 0 ? arr[min_index + 1] : arr[min_index - 1]) * min;
    }

    arr.splice(min_index, 1);
  }
  return result;
};
module.exports = mctFromLeafValues;
