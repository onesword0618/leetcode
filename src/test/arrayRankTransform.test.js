const arrayRankTransform = require('./../main/arrayRankTransform');

describe('渡された数字の配列の要素にランク付けをして返却する', () => {

    test('[40,10,20,30]の引数を渡して[4,1,2,3]が返却される', () => {
        expect(arrayRankTransform([40, 10, 20, 30]))
            .toEqual(expect.arrayContaining([4, 1, 2, 3]));
    });

    test('[100,100,100]の引数を渡して[1,1,1]が返却される', () => {
        expect(arrayRankTransform([100, 100, 100]))
            .toEqual(expect.arrayContaining([1, 1, 1]));
    });

    test('[37,12,28,9,100,56,80,5,12]の引数を渡して [5,3,4,2,8,6,7,1,3]が返却される', () => {
        expect(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]))
            .toEqual(expect.arrayContaining([5, 3, 4, 2, 8, 6, 7, 1, 3]));
    });
});