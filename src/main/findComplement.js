/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
  const str = num.toString(2);
  let result = "";

  for (let i of str) {
    result += i === "1" ? "0" : "1";
  }
  return parseInt(result, 2);
};
module.exports = findComplement;
