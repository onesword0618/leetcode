/**
 * @param {string} s
 * @return {string}
 */
module.exports = sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => {
      return +a[a.length - 1] - +b[b.length - 1];
    })
    .map((s) => s.substr(0, s.length - 1))
    .join(" ");
};
