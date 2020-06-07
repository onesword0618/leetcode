/**
 * @param {string} S
 * @return {number[][]}
 */
module.exports = S => {
    const response = [];
    let start = 0;

    for (let i = 1; i <= S.length; i++) {

        if (S[i] !== S[i - 1]) {

            if (i - start >= 3) {
                response.push([start, i - 1]);
            };
            start = i;
        };
    };
    return response;
};