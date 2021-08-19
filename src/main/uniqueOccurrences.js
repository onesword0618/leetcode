/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const freq = {};

  for (const val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }
  return Object.keys(freq).length === new Set(Object.values(freq)).size;
};
module.exports = uniqueOccurrences;
