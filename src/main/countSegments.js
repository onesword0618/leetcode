/**
 * @param {string} s
 * @return {number}
 */
module.exports = countSegments = function (s) {
    return s.split(' ').filter(Boolean).length;
};