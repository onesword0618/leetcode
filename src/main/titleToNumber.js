/**
 * @param {string} s
 * @return {number}
 */
module.exports = (s) => {
  let columnNumber = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[s.length - 1 - i];
    columnNumber += Math.pow(26, i) * (char.charCodeAt(0) - 64);
  }
  return columnNumber;
};
