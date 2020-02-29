const majorityElement = require('./../main/majorityElement');
//    Question
//        Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//        You may assume that the array is non - empty and the majority element always exist in the array.

describe('引数に渡した配列で一番出現した値を返却する', () => {

    describe('majorityElement のが実行されるとき', () => {

        test('[3,2,3]を入力して3が返却されること', () => {
            expect(majorityElement([3, 2, 3])).toBe(3);
        });

        test('[2,2,1,1,1,2,2]を入力して2が返却されること', () => {
            expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
        });
    });
});