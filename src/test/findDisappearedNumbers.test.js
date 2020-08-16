const findDisappearedNumbers = require('./../main/findDisappearedNumbers.js');
//    Question
//       Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//       Find all the elements of [1, n] inclusive that do not appear in this array.
//       Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

describe('引数の配列で見つからない要素を配列にして返却する', () => {
    describe('findDisappearedNumbers(number[] nums)  を実行するとき', () => {
        test('nums = [4,3,2,7,8,2,3,1]を引数に[5,6]が返却されること', () => {
            expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual(expect.arrayContaining([5,6]));
        });
    });
});