/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
module.exports = (g, s) => {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b)
    let count = 0;
    let k = g.length - 1;
    let c = s.length - 1;

    while (k >= 0) {
        let kid = g[k];
        let cookie = s[c];

        if (cookie >= kid) {
            count++;
            k--;
            c--;
        } else {
            k--;
        };

    };
    return count;
};