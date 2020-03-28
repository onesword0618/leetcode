/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
module.exports = (nums, val) => {
    return (nums.splice(0, nums.length, ...nums.filter(v => { return v != val }))).length;
};