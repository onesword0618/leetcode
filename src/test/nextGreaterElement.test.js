const nextGreaterElement = require('./../main/nextGreaterElement.js');
//      Question
//           Given alphanumeric string s.(Alphanumeric string is a string consisting of lowercase English letters and digits).
//           You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2.
//           Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
//           The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

describe('第一引数と第二引数を比較して配列の要素の比較結果を返却する', () => {

    describe('nextGreaterElement(number[] nums1 number[] nums2) を実行するとき', () => {

        test('nums1 = [4,1,2], nums2 = [1,3,4,2]を入力して[-1,3,-1]が返却されること', () => {
            expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual(expect.arrayContaining([-1, 3, -1]));
        });

        test('nums1 = [2,4], nums2 = [1,2,3,4]を入力して[3,-1]が返却されること', () => {
            expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual(expect.arrayContaining([3, -1]));
        });
    });
});