const dominantIndex = require('./../main/dominantIndex.js');
//      Question
//          In a given integer array nums, there is always exactly one largest element.
//          Find whether the largest element in the array is at least twice as much as every other number in the array.
//          If it is, return the index of the largest element, otherwise return -1.

describe('引数の配列を最大要素を取り出し他の要素のX倍かどうかでその位置を返却する', () => {

    describe('dominantIndex(number[] nums) を実行するとき', () => {

        test('nums = [3, 6, 1, 0] を入力して1が返却されること', () => {
            expect(dominantIndex([3, 6, 1, 0])).toBe(1);
        });

        test('nums = [1, 2, 3, 4] を入力して-1が返却されること', () => {
            expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
        });

    });
});