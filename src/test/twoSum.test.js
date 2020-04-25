const twoSum = require('./../main/twoSum.js');
//      Question
//           Given an array of integers that is already sorted in ascending order,
//           find two numbers such that they add up to a specific target number.
//           The function twoSum should return indices of the two numbers such that they add up to the target,
//           where index1 must be less than index2.

describe('引数の配列に対して第二引数の合計になる要素の位置を返却する', () => {

    describe('twoSum(number[] numbers, number target) を実行するとき', () => {

        test('numbers = [2,7,11,15], target = 9 を入力して[1,2]が返却されること', () => {
            expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([1, 2]));
        });
    });
});