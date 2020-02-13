/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function (A) {
    if (A.length <= 1) return true;
    let increasing = false;
    let decreasing = false;
    for (let i = 1; i < A.length; i += 1) {
        if (A[i - 1] > A[i]) increasing = true;
        if (A[i - 1] < A[i]) decreasing = true;
        if (increasing && decreasing) return false;
    }
    return true;
};
module.exports = isMonotonic;