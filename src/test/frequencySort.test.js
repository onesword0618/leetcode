const frequencySort = require('./../main/frequencySort.js');
//    Question
//     Given an array of integers nums,
//     sort the array in increasing order based on the frequency of the values.
//     If multiple values have the same frequency, sort them in decreasing order.
//     Return the sorted array.

describe('与式として与えられた引数の配列の要素の数の出現頻度で並び替えた配列を返却する', () => {
 describe('frequencySort(number[] nums) を実行するとき', () => {
  test('nums = [1,1,2,2,2,3]を引数に[3,1,1,2,2,2]が返却されること', () => {
   expect(frequencySort([1,1,2,2,2,3])).toEqual(expect.arrayContaining([3,1,1,2,2,2]));
  });

  test('nums = [2,3,1,3,2]を引数に[1,3,3,2,2]が返却されること', () => {
   expect(frequencySort([2,3,1,3,2])).toEqual(expect.arrayContaining([1,3,3,2,2]));
  });

  test('nums = [-1,1,-6,4,5,-6,1,4,1]を引数に[5,-1,4,4,-6,-6,1,1,1]が返却されること', () => {
   expect(frequencySort([-1,1,-6,4,5,-6,1,4,1])).toEqual(expect.arrayContaining([5,-1,4,4,-6,-6,1,1,1]));
  });
 });
});