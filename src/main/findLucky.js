/**
 * @param {number[]} arr
 * @return {number}
 */
module.exports = findLucky = function (arr) {
  const map = {};
  let max = -1;

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] ? map[arr[i]]++ : (map[arr[i]] = 1);
  }

  for (let el in map) {
    if (Number(el) === map[el] && Number(el) > max) max = Number(el);
  }
  return max;
};
