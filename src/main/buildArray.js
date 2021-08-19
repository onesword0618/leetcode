/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
module.exports = (target, n) => {
  let res = [],
    j = 1;
  for (let i = 0; i < target.length; i++) {
    if (target[i] === j) res.push("Push");
    else {
      res.push("Push", "Pop");
      i--;
    }
    j++;
  }
  return res;
};
