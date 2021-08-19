/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function (S) {
  let index = 0;
  let words = S.replace(/[^a-zA-Z]/g, "")
    .split("")
    .reverse();
  return S.replace(/[a-zA-Z]/g, (_) => words[index++]);
};
module.exports = reverseOnlyLetters;
