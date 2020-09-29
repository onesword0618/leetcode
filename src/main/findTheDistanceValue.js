/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
module.exports = (arr1, arr2, d) => {
    return arr1.reduce(
        (acc, cur) => (arr2.every((y) => Math.abs(cur - y) > d) ? acc + 1 : acc), 0);
};