/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
module.exports = matrixReshape = function (nums, r, c) {
    const all = nums.reduce((all, row) => [...all, ...row], []);
    return all.length === r * c ? new Array(r).fill(0).map((row, m) => all.slice(m * c, m * c + c)) : nums;
};