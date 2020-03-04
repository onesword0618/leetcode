/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function(pattern, str) {

    let letter = str.split(' ');
    let patternSplit = pattern.split('');

    if (letter.length !== patternSplit.length) {
        return false;
    };

    if (new Set(letter).size !== new Set(patternSplit).size) {
        return false;
    };

    let obj = {};

    patternSplit.forEach((p, i) => {
        obj[p] = letter[i];
    });

    return patternSplit.map(p => obj[p]).join(' ') === letter.join(' ');
};
module.exports = wordPattern;