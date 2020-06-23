const findLengthOfLCIS = require('./../main/findLengthOfLCIS.js');
//    Question
//      Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

describe('引数の数値の配列を指定して連続したシーケンスの長さを返却する', () => {
    describe('findLengthOfLCIS(number[] nums)  を実行するとき', () => {
        test('nums = [1,3,5,4,7]を引数に3が返却されること', () => {
            expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
        });

        test('nums = [2,2,2,2,2]を引数に3が返却されること', () => {
            expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
        });
    });
});