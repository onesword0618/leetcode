/**
 * @param {number} number
 * @return {boolean}
 */
const isPalindrome = function (number) {

    if (number < 0 || (number % 10 === 0 && number !== 0)) {
        return false;
    }

    let revNumber = 0;
    let j = number;

    while (j > 0) {
        revNumber = (revNumber * 10) + (j % 10);
        j = ~~(j / 10); // bit
    }

    return number === revNumber;
};
module.exports = isPalindrome;