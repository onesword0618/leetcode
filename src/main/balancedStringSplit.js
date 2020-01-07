/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {

    let setMapping = function () {
        return {
            R: 0,
            L: 0
        };
    };

    let map = setMapping();
    let number = 0;

    for (let c of s) {
        map[c]++;
        if (map['R'] == map['L']) {
            number++;
            map = setMapping();
        };
    };
    return number;
};
module.exports = balancedStringSplit;