const findRadius = require('./../main/findRadius.js');
//    Question
//      Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.
//      Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.
//      So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

describe('家の位置を表現した配列に設定したヒーターで家を暖めることができるかを返却する', () => {
    describe('findRadius(number[] houses number[] heaters)  を実行するとき', () => {
        test('houses = [1, 2, 3], heaters = [2]を引数に1が返却されること', () => {
            expect(findRadius([1, 2, 3], [2])).toBe(1);
        });

        test('houses = [1,2,3,4], heaters = [1,4]を引数に1が返却されること', () => {
            expect(findRadius([1, 2, 3, 4], [1, 4])).toBe(1);
        });
    });
});