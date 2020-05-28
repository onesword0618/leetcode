/**
 * @param {number} n
 * @return {string}
 */
module.exports = n => {

    let title = '';
    while (n > 0) {
        n--;
        title += String.fromCharCode(65 + (n % 26));
        n = parseInt(n / 26);
    };
    return title.split('').reverse().join('');
};