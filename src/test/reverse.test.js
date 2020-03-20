const reverse = require('./../main/reverse.js');
//   Question
//      Given a 32-bit signed integer, reverse digits of an integer.

describe('32ビッドの符号付き整数を逆桁にして返却する', () => {

    describe('reverse(number)が実行されたとき', () => {

        test('number=123の場合、321が返却されること', () => {
            expect(reverse(123)).toEqual(321);
        });

        test('number=-123の場合、-321が返却されること', () => {
            expect(reverse(-123)).toEqual(-321);
        });

        test('number=120の場合、21が返却されること', () => {
            expect(reverse(120)).toEqual(21);
        });
    });
});