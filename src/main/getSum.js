/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
module.exports = getSum = function(a, b) {

    if ((a & b) === 0) {
        return a ^ b;
    };

    return getSum((a ^ b), ((a & b) << 1));

};