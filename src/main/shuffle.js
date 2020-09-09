/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
module.exports = shuffle = function (nums, n) {
    let x = nums.slice(0, n);
    let y = nums.slice(n);
    let result = [];

    for (let i = 0; i < nums.length / 2; i++) {
        let cx = x[i];
        let cy = y[i];
        result.push(cx);
        result.push(cy);
    }
    return result;
};