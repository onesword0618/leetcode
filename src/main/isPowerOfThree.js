/**
 * @param {number} n
 * @return {boolean}
 */
module.exports = n => {
    return Number.isInteger(+(Math.log(n) / Math.log(3)).toFixed(14));
};