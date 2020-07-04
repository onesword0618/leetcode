const lastStoneWeight = require('./../main/lastStoneWeight.js');
//    Question
//      We have a collection of stones, each stone has a positive integer weight.
//      Each turn, we choose the two heaviest stones and smash them together.Suppose the stones have weights x and y with x <= y.The result of this smash is:
//      - If x == y, both stones are totally destroyed;
//      - If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y - x.
//      At the end, there is at most 1 stone left.Return the weight of this stone(or 0 if there are no stones left.)

describe('配列を石の重量に見立てて重い石同士で砕いて最後の石の重量の数を返却する', () => {
    describe('lastStoneWeight(number[] stones)  を実行するとき', () => {
        test('stons = [2,7,4,1,8,1]を引数に1が返却されること', () => {
            expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
        });
    });
});