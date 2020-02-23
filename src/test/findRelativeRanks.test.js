const findRelativeRanks = require('./../main/findRelativeRanks');
//    Question
//    Given scores of N athletes, find their relative ranks and the people with the top three highest scores
//    who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

//    Note:
//      1. N is a positive integer and won't exceed 10,000.
//      2. All the scores of athletes are guaranteed to be unique.


describe('渡された数字の配列からトップから3つの要素をGold Medal,Silver Medal,Bronze Medalに置換することができる', () => {

    describe('findRelativeRanks が成功するとき', () => {
        test('[5, 4, 3, 2, 1]を引数に[Gold Medal,Silver Medal,Bronze Medal,4,5]が返却されること', () => {
            expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual(expect.arrayContaining(['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5']));
        });
    });

    describe('findRelativeRanks が失敗するとき', () => {
        test('[1, 1, 1, 1, 1]を引数に[Gold Medal,Gold Medal,Gold Medal,Gold Medal,Gold Medal]が返却されないこと \n この問題の制限として数字の配列の値はユニーク値であること \n  実際は[5,5,5,5,5]が返却される', () => {
            expect(findRelativeRanks([1, 1, 1, 1, 1])).not.toEqual(expect.arrayContaining(['Gold Medal', 'Gold Medal', 'Gold Medal', 'Gold Medal', 'Gold Medal']));
        });
    });
});