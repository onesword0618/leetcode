/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
module.exports = (a, b) => {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};