const minSubArrayLen = require('./../main/minSubArrayLen');
//   Question
//      Given an array of positive integers nums and a positive integer target,
//      return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater
//      than or equal to target. If there is no such subarray, return 0 instead.

describe('targetの数値を満たす配列の最小の合計値の要素数を返却する', () => {
    describe('minSubArrayLen (number target number[] nums) を実行するとき', () => {
        test('target = 7, nums = [2,3,1,2,4,3]を入力して2が返却されること', () => {
            expect(minSubArrayLen(7,[2,3,1,2,4,3])).toBe(2);
        });

        test('target = 4, nums = [1,4,4]を入力して1が返却されること', () => {
            expect(minSubArrayLen(4,[1,4,4])).toBe(1);
        });

        test('target = 11, nums = [1,1,1,1,1,1,1,1]を入力して0が返却されること', () => {
            expect(minSubArrayLen(11,[1,1,1,1,1,1,1,1])).toBe(0);
        });
    });
});