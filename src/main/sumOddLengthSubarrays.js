/**
 * @param {number[]} arr
 * @return {number}
 */
module.exports = (arr) => {
  let n, prev, sum;
  n = arr.length;
  sum = 0;
  for (let i = 0; i < n; i++) {
    prev = arr[i];
    sum += prev;
    for (let j = i; j < n - 2; j += 2) {
      prev += arr[j + 1] + arr[j + 2];
      sum += prev;
    }
  }
  return sum;
};
