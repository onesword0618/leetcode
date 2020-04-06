/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports = (nums, target) => {
    return nums.filter(n => n < target).length;
};