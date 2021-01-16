/**
 * @param {string} s
 * @return {number}
 */
module.exports = longestPalindrome = function(s) {
 const charMap = new Map();
 let sum = 0;
 for(let c of s) {
     charMap.set(c, (charMap.get(c) || 0) + 1);
     if(!(charMap.get(c) % 2)) sum += 2;
 };
 return s.length > sum ? ++sum : sum;
};