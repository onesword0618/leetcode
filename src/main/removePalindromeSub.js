/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function(s) {
    return s.length === 0 ? 0 : s.split('').reverse().join('') === s ? 1 : 2;
};
module.exports = removePalindromeSub;