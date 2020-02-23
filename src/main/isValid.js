/**
 * @param {string} str
 * @return {boolean}
 */
const isValid = function(str) {

    if (str === null || str.length <= 0) {
        return true;
    };

    const brackets = str.split('');
    let stack = [];

    for (let bracket of brackets) {

        if (bracket === '[') {
            stack.push(']');
        };

        if (bracket === '{') {
            stack.push('}');
        };

        if (bracket === '(') {
            stack.push(')');
        };

        if (stack.length === 0 || bracket !== stack.pop()) {
            return false;
        };
    };

    if (stack.length === 0) {
        return true;
    };
    return false;
};
module.exports = isValid;