/**
 * @param {number[][]} costs
 * @return {number}
 */
module.exports = costs => {
    return costs.map(e => e.concat(e[0] - e[1])).sort((a, b) => (a[2] !== b[2]) ? a[2] - b[2] : a[0] - b[0]).map((e, i) => (i < costs.length / 2) ? e[0] : e[1]).reduce((pV, cV) => pV + cV, 0);
};