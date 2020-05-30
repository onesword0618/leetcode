/**
 * @param {string} text
 * @return {number}
 */
module.exports = text => {
    return Math.min(
        (text.match(/(b)/g) || '').length,
        (text.match(/(a)/g) || '').length,
        Math.trunc((text.match(/(l)/g) || '').length / 2),
        Math.trunc((text.match(/(o)/g) || '').length / 2),
        (text.match(/(n)/g) || '').length,
    );
};