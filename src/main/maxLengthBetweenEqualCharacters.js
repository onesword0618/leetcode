/**
 * @param {string} s
 * @return {number}
 */
module.exports = (s) => {
  let res = -1;
  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    res = Math.max(res, map[s[i]] - i - 1);
  }
  return res;
};
