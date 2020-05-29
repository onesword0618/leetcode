/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = nums => {
    let pos = 0;

    for (var i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        };
    };

    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    };

    return nums;
};