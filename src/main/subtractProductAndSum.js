/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
    const digits = Array.from(String(n), Number);
    const product = digits.reduce((first, second) => first * second);
    const sum = digits.reduce((first, second) => first + second);
    return product - sum;
};
module.exports = subtractProductAndSum;