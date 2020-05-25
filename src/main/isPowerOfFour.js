/**
 * @param {number} num
 * @return {boolean}
 */
module.exports = num => {

    if (num <= 0) {
        return false;
    } else if (num === 1) {
        return true;
    };
    return (num & (num - 1)) === 0 && (num % 10 === 4 || num % 10 === 6);
};