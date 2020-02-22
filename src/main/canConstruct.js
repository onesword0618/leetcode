/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {

    if (ransomNote.length > magazine.length) {
        return false;
    };

    let ransomNoteArray = ransomNote.split('');
    let magazineLength = magazine.length;

    ransomNoteArray.forEach(
        (item, index) => magazine = magazine.replace(item, '')
    );

    return magazineLength === magazine.length + ransomNoteArray.length;
};
module.exports = canConstruct;