/**
 * @param {string} S
 * @return {string}
 */
module.exports = s => {
    let left = 0;
    let right = 0;
    let result = '';

    for (let parent of s) {

        parent === '(' ? left++ : right++;

        if (left === right) {
            left = 0;
            right = 0;
            continue;
        };

        if (left === 1) {
            continue;
        };

        result += parent;
    };

    return result;
};