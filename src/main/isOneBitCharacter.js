/**
 * @param {number[]} bits
 * @return {boolean}
 */
module.exports = bits => {
    let i = 0;
    while (i < bits.length - 1) {
        if (bits[i] === 1) {
            i++;
        };
        i++;
    };
    return bits[i] === 0;
};