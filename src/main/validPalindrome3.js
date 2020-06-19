/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = s => {
    let i = 0;
    let j = s.length - 1;

    let isPalindrome = function (s, i, j) {
        while (i < j) {
            if (s.charAt(i++) !== s.charAt(j--)) {
                return false;
            }
        }
        return true;
    };

    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
        }
        i++
        j--
    };
    return true;
};