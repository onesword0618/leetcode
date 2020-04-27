const numberOfBoomerangs = require('./../main/numberOfBoomerangs.js');
//      Question
//           Given n points in the plane that are all pairwise distinct,
//           a "boomerang" is a tuple of points (i, j, k) such that the distance
//           between i and j equals the distance between i and k (the order of the tuple matters).
//           Find the number of boomerangs.
//           You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

describe('ある規則に従って入力からブーメランの数を返却する', () => {

    describe('numberOfBoomerangs(number[][] points) を実行するとき', () => {

        test('points =  [[0,0],[1,0],[2,0]] を入力して2が返却されること', () => {
            expect(numberOfBoomerangs([
                [0, 0],
                [1, 0],
                [2, 0]
            ])).toBe(2);
        });
    });
});