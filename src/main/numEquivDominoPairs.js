/**
 * @param {number[][]} dominoes
 * @return {number}
 */
module.exports = numEquivDominoPairs = function (dominoes) {

    let arr = Array(100).fill(0), pairCount = 0;

    for (const d of dominoes) {
        const num = d[0] < d[1] ? d[0] * 10 + d[1] : d[1] * 10 + d[0];
        pairCount += arr[num];
        arr[num]++;
    };

    return pairCount;
};