const hammingDistance = require('./../main/hammingDistance.js');
//    Question
//        The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
//        Given two integers x and y, calculate the Hamming distance.

describe('引数に渡した数のビット数の距離を導出する', () => {

    describe('hammingDistance(number1,number2) が実行されるとき', () => {

        test('number1=1,number2=4 を入力して2が返却されること', () => {
            expect(hammingDistance(1, 4)).toBe(2);
        });

        test('number1=2,number2=3を入力して1が返却されること', () => {
            expect(hammingDistance(2, 3)).toBe(1);
        });
    });
});