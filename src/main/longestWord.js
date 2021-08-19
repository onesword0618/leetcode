/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function (words) {
  let set = new Set(words);
  let result = "";

  words.forEach((word) => {
    if (word.length < result.length) {
      return;
    }

    if (word.length === result.length && word > result) {
      return;
    }

    const length = word.length;

    for (let i = length - 1; i > 0; i--) {
      if (!set.has(word.substring(0, i))) {
        return;
      }
    }
    result = word;
  });
  return result;
};
module.exports = longestWord;
