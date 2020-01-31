/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {

    let [i, j] = [0, s.length - 1];

    while (i < j) {
        [
            s[i], s[j]
        ] = [
            s[j], s[i]
        ];

        i++;
        j--;
    }
    return s;
};
module.exports = reverseString;