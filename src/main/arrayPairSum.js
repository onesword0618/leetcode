/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = nums => {
    return nums.sort((a, b) => a - b).reduce((sum, num, i) => sum + !(i % 2) * num, 0);
};