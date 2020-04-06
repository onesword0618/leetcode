const searchInsert = require('./../main/searchInsert.js');
//      Question
//        Given a sorted array and a target value,
//        return the index if the target is found.
//        If not, return the index where it would be if it were inserted in order.
//       You may assume no duplicates in the array.

describe('第一引数の配列に対して第二引数の数字と合致する要素の位置を返却する　\n 見つからない場合は、順番に数字が挿入されたときのインデックスを返却する', () => {

    describe('searchInsert(number[] nums, number target) を実行するとき', () => {

        test('nums = [1,3,5,6], target = 5 を入力して2が返却されること', () => {
            expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
        });

        test('nums = [1,3,5,6], target = 2 を入力して1が返却されること', () => {
            expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
        });

        test('nums = [1,3,5,6], target = 7 を入力して4が返却されること', () => {
            expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
        });

        test('nums = [1,3,5,6], target = 0 を入力して0が返却されること', () => {
            expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
        });
    });
});