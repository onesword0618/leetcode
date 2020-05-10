/**
 * @param {number[]} chips
 * @return {number}
 */
module.exports = chips => {
    return (
        (chips.length - Math.abs(chips.reduce(
            (acc, cur) => (cur % 2 ? acc + 1 : acc - 1), 0))) >> 1);
};