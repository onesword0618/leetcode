const replaceElements = require('./../main/replaceElements.js');
//    Question
//        Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
//        After doing so, return the array.

describe('引数の配列のすべての要素をその右側で最大の数に置き換え、最後の要素を-1にして返却する', () => {

    describe('replaceElements([nums]) が実行されるとき', () => {

        test('number[]=[17,18,5,4,6,1]を入力して[18,6,6,6,1,-1]が返却されること', () => {
            expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual(expect.arrayContaining([18, 6, 6, 6, 1, -1]));
        });

        test('number[]=[10,11,6,4]を入力して[11, 6, 4, -1]が返却されること', () => {
            expect(replaceElements([10, 11, 6, 4])).toEqual(expect.arrayContaining([11, 6, 4, -1]));
        });
    });
});