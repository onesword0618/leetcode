/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = (s) => {
  return s.repeat(2).slice(1, -1).includes(s);
};
