/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
module.exports = kWeakestRows = function (mat, k) {
    return mat
        .map((arr, idx) => ({ idx, total: arr.reduce((total, n) => total + n, 0) }))
        .sort((a, b) => a.total - b.total)
        .splice(0, k)
        .map(result => result.idx)

};