/**
 * @param {number} n
 * @return {number}
 */
module.exports = n => {
    let map = {};
    let max = 1;
    for (let i = 1; i <= n; i++) {
        let sum = [...
            `${i}`
        ].reduce((a, c) => a + +c, 0);
        map[sum] ? map[sum]++ : map[sum] = 1;
        max = Math.max(max, map[sum]);
    }
    return Object.values(map).filter(x => x === max).length;
};