/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const compare = {};
    for (let i = 0; i < nums.length; i++) {
        if (compare[nums[i]] >= 0) {
            return [compare[nums[i]], i];
        }
        compare[target - nums[i]] = i;
    }
};
module.exports = twoSum;