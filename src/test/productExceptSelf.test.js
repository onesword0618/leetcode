const productExceptSelf = require('./../main/productExceptSelf.js');
//    Question
//    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

describe('引数の配列の積から変換した結果を返却する', () => {

    describe('productExceptSelf(number[] nums)  を実行するとき', () => {

      test('nums = [1,2,3,4]を引数に[24,12,8,6]が返却されること', () => {
         expect(productExceptSelf([1,2,3,4])).toEqual(expect.arrayContaining([24,12,8,6]));
      });

      test('nums = [-1,1,0,-3,3]を引数に[0,0,9,0,0]が返却されること', () => {
        expect(productExceptSelf([-1,1,0,-3,3])).toEqual(expect.arrayContaining([0,0,9,0,0]));
      });
    });
});