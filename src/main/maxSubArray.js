/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = nums => {
    return nums.reduce(
        ([localMax, globalMax], curr) => [
            Math.max(curr, localMax + curr),
            Math.max(curr, localMax + curr, globalMax),
        ],
        [-Infinity, -Infinity]
    )[1];
};