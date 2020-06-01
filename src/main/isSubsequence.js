/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
module.exports = (s, t) => {

    let newS = s;

    for (let char of t) {

        if (newS[0] === char) {
            newS = newS.slice(1);
        };
    };
    return !newS.length;
};