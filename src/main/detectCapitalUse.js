/**
 * @param {string} word
 * @return {boolean}
 */
module.exports = (word) => {
  return (
    word === word.toUpperCase() ||
    word === word[0] + word.substr(1).toLowerCase()
  );
};
