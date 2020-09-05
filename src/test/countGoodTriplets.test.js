const countGoodTriplets = require('./../main/countGoodTriplets');
//   Question
//      Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

describe('渡した引数の数の間の奇数の数を返却する', () => {

    test('[3,0,1,1,9,7],7,2,3の引数を渡して4が返却される', () => {
        expect(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)).toBe(4);
    });

    test('[1, 1, 2, 2, 3], 0, 0,1の引数を渡して0が返却される', () => {
        expect(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)).toBe(0);
    });
});