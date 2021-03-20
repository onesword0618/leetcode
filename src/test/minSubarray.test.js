const minSubarray = require('./../main/minSubarray');
//   Question
//      Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.
//      Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.
//      A subarray is defined as a contiguous block of elements in the array.

describe('整数の配列に残りの要素の合計で割り切れるときの配列の長さを返却する', () => {
   describe('minSubarray (number[] nums, number p) を実行するとき', () => {
      test('nums = [3,1,4,2], p = 6を入力して1が返却されること', () => {
         expect(minSubarray([3,1,4,2],6)).toBe(1);
      });

      test('nums = [6,3,5,2], p = 9を入力して2が返却されること', () => {
         expect(minSubarray([6,3,5,2],9)).toBe(2);
      });

      test('nums = [1,2,3], p = 3を入力して0が返却されること', () => {
         expect(minSubarray([1,2,3],3)).toBe(0);
      });

      test('nums = [1,2,3], p = 7を入力して-1が返却されること', () => {
         expect(minSubarray([1,2,3],7)).toBe(-1);
      });
    });
});