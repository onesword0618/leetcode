/**
 * @param {string} s
 * @return {number}
 */
module.exports = maxScore = function (s) {
    let zero = 0, one = [...s.matchAll(/1/g)].length, res = 0;

    for (let i = 0; i + 1 < s.length; i++) {
        s[i] === "0" ? zero++ : one--;
        res = Math.max(zero + one, res);
    }
    return res;
};