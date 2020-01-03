/**
 * @param {string} str
 * @return {number}
 */
const romanToInt = function (str) {

    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let index = str.length;
    let result = 0;

    while (index--) {
        const current = map[str.charAt(index)];
        const previous = map[str.charAt(index - 1)];

        result += current;

        if (previous < current) {
            result -= previous;
            index -= 1;
        };
    };
    return result;
};
module.exports = romanToInt;