/**
 * @param {string[]} logs
 * @return {number}
 */
module.exports = logs => {
    return logs.reduce((a, x) => Math.max(0, a + (x === './' ? 0 : x === '../' ? -1 : 1)), 0);
};