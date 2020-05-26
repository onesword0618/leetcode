const checkStraightLine = require('./../main/checkStraightLine.js');
//      Question
//           You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

describe('引数の配列を座標にしたときに直線かどうかの判定を返却する', () => {

    describe('checkStraightLine(number[][] coordinates) を実行するとき', () => {

        test('coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]を入力して真が返却されること', () => {
            expect(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])).toBeTruthy();
        });

        test('coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]を入力して偽が返却されること', () => {
            expect(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])).toBeFalsy();
        });
    });
});