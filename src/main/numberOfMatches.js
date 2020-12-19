/**
 * @param {number} n
 * @return {number}
 */
module.exports = numberOfMatches = n => {
 let matches=0;
 while (n > 1) {
     matches += parseInt(n / 2);
     n = parseInt(n / 2) + n % 2;
 };
 return matches;
};