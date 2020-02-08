/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function (S) {

    let result = [];

    function dfs(current, i) {

        if (current.length == S.length) {
            result.push(current);
            return;
        };

        if (S.charAt(i) >= '0' && S.charAt(i) <= '9') {
            current += S.charAt(i);
            dfs(current, i + 1);
        } else {
            dfs(current + S.charAt(i).toLowerCase(), i + 1);
            dfs(current + S.charAt(i).toUpperCase(), i + 1);
        };
    };
    dfs('', 0);
    return result;
};
module.exports = letterCasePermutation;