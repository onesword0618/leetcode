const maxDistToClosest = require('./../main/maxDistToClosest.js');
//      Question
//         In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty.
//         There is at least one empty seat, and at least one person sitting.
//         Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
//         Return that maximum distance to closest person.

describe('引数の配列を席に見立てて一番間の距離が遠くなる要素を返却する', () => {

    describe('maxDistToClosest(number[] seats) を実行するとき', () => {

        test('seats = [1,0,0,0,1,0,1] を入力して1が返却されること', () => {
            expect(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])).toBe(2);
        });

        test('seats = [1,0,0,0] を入力して3が返却されること', () => {
            expect(maxDistToClosest([1, 0, 0, 0])).toBe(3);
        });
    });
});