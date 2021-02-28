const sumOfUnique = require('./../main/sumOfUnique.js');
//    Question
//      You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
//      Return the sum of all the unique elements of nums.

describe('配列の要素で重複していない数を返却する', () => {

   describe('sumOfUnique (number[] nums) を実行するとき', () => {

      test('nums = [1,2,3,2]を入力して4が返却されること', () => {
       expect(sumOfUnique([1,2,3,2])).toBe(4);
      });

      test('nums = [1,1,1,1,1]を入力して0が返却されること', () => {
       expect(sumOfUnique([1,1,1,1,1])).toBe(0);
      });

      test('nums = [1,2,3,4,5]を入力して15が返却されること', () => {
       expect(sumOfUnique([1,2,3,4,5])).toBe(15);
      });
   });
});