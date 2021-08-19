/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const top = /^[qwertyuiop]+$/i;
  const mid = /^[asdfghjkl]+$/i;
  const bottom = /^[zxcvbnm]+$/i;
  const layouts = [top, mid, bottom];

  return words.filter((word) => layouts.some((layout) => layout.test(word)));
};
module.exports = findWords;
