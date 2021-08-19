/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
  if (num === 0) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < num; i += 1) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
};
module.exports = checkPerfectNumber;
