/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
module.exports = (licensePlate, words) => {
    let match = { 'found': false, 'word': '' };
    let licensePlateChars = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');

    words.forEach(function(word) {

        if (!match.found || word.length < match.word.length) {
            let replaceWord = word.toUpperCase();

            licensePlateChars.forEach(function(lChar) {
                replaceWord = replaceWord.replace(lChar, '');
            });

            if (word.length - licensePlateChars.length === replaceWord.length) {
                match.found = true;
                match.word = word
            };
        };
    });
    return match.word;
};