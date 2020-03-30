/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
module.exports = (x, y) => {
    return (x ^ y).toString(2).split('').filter(num => num === '1').length;
};