/**
 * @param {string} sentence
 * @return {boolean}
 */
module.exports = checkIfPangram = function (sentence) {
  sentence = sentence.split("");
  let a = [];
  for (let i = 0; i < sentence.length; i++) {
    if (!a.includes(sentence[i])) {
      a.push(sentence[i]);
    }
  }
  return a.length === 26;
};
