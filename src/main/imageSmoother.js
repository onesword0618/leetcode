/**
 * @param {number[][]} M
 * @return {number[][]}
 */
module.exports = M => {

    const result = Array(M.length);

    for (let i = 0; i < result.length; i++) {
        result[i] = Array(M[0].length);
    };

    const checks = [
        [0, 0],
        [0, 1],
        [0, -1],
        [1, 0],
        [1, 1],
        [1, -1],
        [-1, 0],
        [-1, 1],
        [-1, -1],

    ];

    for (let i = 0; i < M.length; i++) {

        for (let j = 0; j < M[0].length; j++) {
            let sum = 0;
            let count = 0;

            for (let k = 0; k < checks.length; k++) {
                const [r, c] = checks[k];
                const row = r + i;
                const col = c + j;

                if (row >= 0 &&
                    row < M.length &&
                    col >= 0 &&
                    col < M[0].length) {
                    count++;
                    sum += M[row][col];
                };
            };

            result[i][j] = Math.floor(sum / count);
        };
    };

    return result;
};