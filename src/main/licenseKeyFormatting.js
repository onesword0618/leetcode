/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
module.exports = (S, K) => {
    let accum = '';
    let counter = K;

    for (let i = S.length - 1; i >= 0; i--) {
        const char = S.charAt(i);

        if (char !== '-') {

            if (counter === 0) {
                accum = `-${accum}`;
                counter = K;
            };
            accum = `${char.toUpperCase()}${accum}`;
            counter -= 1;
        };
    };

    return accum;
};