/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
module.exports = (low, high) => {
    low % 2 == 0 && low++;
    high % 2 == 0 && high--;
    return (high - low) / 2 + 1;
};