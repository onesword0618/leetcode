/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function (points) {
    let time = 0;
    for (let index = 0; index < points.length - 1; index++) {
        // どっちかの絶対値の大きい方を加算していく
        // Time from [1,1] to [3,4] = 3 seconds
        // Time from [3,4] to [-1,0] = 4 seconds
        // Total time = 7 seconds
        time += Math.max(
            // 現在の要素のX座標と次の要素のX座標を減算した絶対値
            Math.abs(points[index][0] - points[index + 1][0]),
            // 現在の要素のY座標と次の要素のY座標を減算した絶対値
            Math.abs(points[index][1] - points[index + 1][1])
        );
    };
    return time;
};
module.exports = minTimeToVisitAllPoints;