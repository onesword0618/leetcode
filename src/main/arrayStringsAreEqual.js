/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
module.exports = arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};
