const findShortestSubArray = require('./../main/findShortestSubArray');
//   Question
//      Given a non-empty array of non-negative integers nums,
//      the degree of this array is defined as the maximum frequency of any one of its elements.
//      Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

describe('渡した引数の配列から配列の次数を返却する', () => {

    test('[1,2,2,3,1]の引数を渡して2が返却される', () => {
        expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2);
    });

    test('[1,2,2,3,1,4,2]の引数を渡して6が返却される', () => {
        expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6);
    });
});