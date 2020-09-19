/**
 * @param {number} n
 * @return {number[]}
 */
module.exports = n => {
    for (let i = 1; i < n; i++) if ((n - i).toString().indexOf('0') === -1 && i.toString().indexOf('0') === -1) return [i, n - i];
};