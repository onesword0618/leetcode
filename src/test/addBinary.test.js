const addBinary = require('./../main/addBinary');
//   Question
//      Given two binary strings, return their sum (also a binary string).
//      The input strings are both non-empty and contains only characters 1 or 0.

describe('渡した引数をバイナリとしての合計値のバイナリを返却する', () => {

    test('11,1の引数を渡して100が返却される', () => {
        expect(addBinary('11', '1')).toBe('100');
    });

    test('1010,1011の引数を渡して100が返却される', () => {
        expect(addBinary('1010', '1011')).toBe('10101');
    });
});