/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
module.exports = (secret, guess) => {

    let A = 0;
    let B = 0;
    let chars = new Map();

    for (let i = 0; i < secret.length; i++) {

        if (secret[i] === guess[i]) {
            A++;
        } else {
            chars.set(secret[i], chars.get(secret[i]) + 1 || 1);
        };
    };

    for (let i = 0; i < guess.length; i++) {

        if (chars.get(guess[i]) > 0 && secret[i] !== guess[i]) {
            ++B && chars.set(guess[i], chars.get(guess[i]) - 1);
        };
    };

    return `${A}A${B}B`;
};