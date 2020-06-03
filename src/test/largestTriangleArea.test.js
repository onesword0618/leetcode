const largestTriangleArea = require('./../main/largestTriangleArea.js');
//      Question
//         You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.

describe('引数の座標の中で生成できる最大値の面積の三角形を返却する', () => {

    describe('largestTriangleArea(number[][] points) を実行するとき', () => {

        test('points = [0,0],[0,1],[1,0],[0,2],[2,0] を入力して約2が返却されること', () => {
            expect(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]])).toBe(1.9999999999999993);
        });
    });
});