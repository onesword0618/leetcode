/**
 * @param {number} n
 * @return {boolean}
 */
module.exports = n => {
    return n > 0 ? !(n & (n - 1)) : false;
};