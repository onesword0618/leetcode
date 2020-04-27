/**
 * @param {number[][]} points
 * @return {number}
 */
module.exports = points => {
    let result = 0;

    for (let i = 0; i < points.length; i++) {
        const map = {};
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue;
            };

            const distance =
                (points[i][0] - points[j][0]) * (points[i][0] - points[j][0]) +
                (points[i][1] - points[j][1]) * (points[i][1] - points[j][1]);
            map[distance] = (map[distance] || 0) + 1;
        }
        result = Object.values(map).reduce((acc, cur) => acc + cur * (cur - 1), result);
    }
    return result;

};