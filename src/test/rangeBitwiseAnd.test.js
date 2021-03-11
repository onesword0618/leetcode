const rangeBitwiseAnd = require('./../main/rangeBitwiseAnd.js');
//      Question
//           Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

describe('数値範囲のビットごとのANDを返却する', () => {
   describe('rangeBitwiseAnd(number left number right) を実行するとき', () => {
    test('left = 5, right = 7 を入力して4が返却されること', () => {
     expect(rangeBitwiseAnd(5,7)).toBe(4);
    });

    test('left = 0, right = 0 を入力して0が返却されること', () => {
     expect(rangeBitwiseAnd(0,0)).toBe(0);
    });

    test('left = 1, right = 2147483647 を入力して0が返却されること', () => {
     expect(rangeBitwiseAnd(1,2147483647)).toBe(0);
    });
   });
});