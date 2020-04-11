/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
module.exports = (s, t) => {
    return s.split('').sort().join('') == t.split('').sort().join('');
};