/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function(name, typed) {
    let i = 0;
    return typed.split("").filter(s => s == name[i] ? ++i : false).length == name.length;
};
module.exports = isLongPressedName;