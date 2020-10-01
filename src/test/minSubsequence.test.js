const minSubsequence = require('./../main/minSubsequence');
//      Question
//           Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 
//           If there are multiple solutions, return the subsequence with minimum size and
//           if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements.
//           A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 
//           Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

describe('引数の配列から大きい配列を作成して返却する', () => {

    describe('minSubsequence(number[] arr) を実行するとき', () => {

        test('nums = [4,3,10,9,8]を入力して[10,9]が返却されること', () => {
            expect(minSubsequence([4, 3, 10, 9, 8])).toEqual(expect.arrayContaining([10, 9]));
        });

        test('nums = [4,4,7,6,7]を入力して[7,7,6]が返却されること', () => {
            expect(minSubsequence([4, 4, 7, 6, 7])).toEqual(expect.arrayContaining([7, 7, 6]));
        });

        test('nums = [6]を入力して[6]が返却されること', () => {
            expect(minSubsequence([6])).toEqual(expect.arrayContaining([6]));
        });
    });
});