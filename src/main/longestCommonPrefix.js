/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {

    if (strs === undefined || strs.length === 0) {
        return "";
    }

    wordList = strs.sort();
    firstWord = wordList[0];
    var index = 0;
    while (index < firstWord.length) {
        if(firstWord.charAt(index) == wordList[wordList.length -1].charAt(index)) {
            index++;
            continue;
        }
        break;
    }
    return firstWord.substring(0, index);
};
module.exports = longestCommonPrefix;