/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function (S) {
  let res = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== res[res.length - 1]) {
      res.push(S[i]);
    } else {
      res.pop();
    }
  }
  return res.join("");
};
module.exports = removeDuplicates;
