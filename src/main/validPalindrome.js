/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  return s.split("").reverse().join("") === s;
};
