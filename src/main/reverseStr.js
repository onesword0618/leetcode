/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
module.exports = (s, k) => {
    return s.replace(new RegExp(`(.{${k}})`, 'g'), '$1,')
        .split(',')
        .map((str, i) => (i % 2 ?
            str : str.split('').reverse().join('')))
        .join('');
};