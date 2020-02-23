/**
 * @param {string} str
 * @return {boolean}
 */
const isValid = function(str) {

    if (str === null || str.length <= 0) {
        return true;
    };

    let brackets = str.split('');
    let stack = [];

    for (let bracket of brackets) {
        if (bracket === '[') {
            stack.push(']');
        } else if (bracket === '{') {
            stack.push('}');
        } else if (bracket === '(') {
            stack.push(')');
        } else if (stack.length === 0 || bracket !== stack.pop()) {
            return false;
        };
    };

    if (stack.length === 0) {
        return true;
    };
    return false;
};
module.exports = isValid;