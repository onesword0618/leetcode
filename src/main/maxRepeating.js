/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
module.exports = maxRepeating = (sequence, word, cnt = 0) =>
  !sequence.includes(word.repeat(cnt + 1))
    ? cnt
    : maxRepeating(sequence, word, cnt + 1);
