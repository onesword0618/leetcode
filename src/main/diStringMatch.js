/**
 * @param {string} S
 * @return {number[]}
 */
module.exports = S => {
    let bottom = S.split('D').length - 1;
    let top = bottom + 1;
    return ('D' + S).split('').map(c => c == 'I' ? top++ : bottom--);
};