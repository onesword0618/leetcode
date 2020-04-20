/**
 * @param {string} s
 * @return {string}
 */
module.exports = s => {
    let a = [];
    let b = [];

    for (x of s) {
        isNaN(x) ? a.push(x) : b.push(x);
    };

    if (a.length < b.length) {
        [a, b] = [b, a];
    };

    return a.length - b.length <= 1 ? a.map((x, i) => x + (b[i] ? b[i] : '')).join('') : '';
};