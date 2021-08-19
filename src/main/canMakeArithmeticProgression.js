/**
 * @param {number[]} arr
 * @return {boolean}
 */
module.exports = (arr) => {
  if (arr.length < 3) {
    return true;
  }

  arr.sort((a, b) => {
    return a - b;
  });
  let diff = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};
