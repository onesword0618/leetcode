/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {

    return nums.reduce((accumulator, current) => accumulator ^ current);
};
module.exports = singleNumber;