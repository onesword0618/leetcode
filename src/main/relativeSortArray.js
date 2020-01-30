/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {

    const mapping = {};
    const solArr = [];
    const restArr = [];

    for (const val of arr2) {
        mapping[val] = 0;
    };

    for (const val of arr1) {
        if (mapping[val] >= 0) {
            mapping[val]++;
        } else {
            restArr.push(val);
        };
    };

    for (const val of arr2) {
        for (let i = 0; i < mapping[val]; i++) {
            solArr.push(val)
        };
    };

    return [...solArr, ...restArr.sort((a, b) => a > b ? 1 : -1)];
};
module.exports = relativeSortArray;