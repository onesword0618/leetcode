/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
module.exports = (sentence, searchWord) => {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; ++i) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};
