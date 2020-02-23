/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = function(nums) {

    const sortedNums = nums.slice(0).sort(function(a, b) {
        return b - a;
    });

    let sortedNumsMapping = {};

    sortedNums.forEach(function(num, index) {
        sortedNumsMapping[num] = index + 1 + '';
    });

    return nums.map(function(num, index) {

        if (sortedNumsMapping[num] === '1') {
            return 'Gold Medal';
        };

        if (sortedNumsMapping[num] === '2') {
            return 'Silver Medal';
        };

        if (sortedNumsMapping[num] === '3') {
            return 'Bronze Medal';
        };
        return (sortedNumsMapping[num]);
    });
};
module.exports = findRelativeRanks;