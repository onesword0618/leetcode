const findKthPositive = require('./../main/findKthPositive');
//   Question
//      Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
//      Find the kth positive integer that is missing from this array.

describe('渡した引数で欠けている連番で対象の要素を返却する', () => {

    test('[2,3,4,7,11],5の引数を渡して9が返却される', () => {
        expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);
    });

    test('[1,2,3,4],2の引数を渡して6が返却される', () => {
        expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6);
    });
});