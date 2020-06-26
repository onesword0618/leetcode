/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
module.exports = (A, K) => {
    while (K > 0) {
        let min = Math.min(...A);
        let minIndex = A.indexOf(min);
        A[minIndex] = min * -1;
        K--;
    };

    const sum = A.reduce(function (a, b) {
        return a + b;
    }, 0);

    return sum;
};