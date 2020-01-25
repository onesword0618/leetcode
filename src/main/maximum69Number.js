/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
    return Number(num.toString().replace('6', '9'));
};
module.exports = maximum69Number;