const getDecimalValue = require('./../main/getDecimalValue');
//   Question
//      Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1.
//      The linked list holds the binary representation of a number.
//      Return the decimal value of the number in the linked list.

describe('渡した引数の2進数を整数に変換して返却する', () => {

    test('[1,0,1]の引数を渡して5が返却される', () => {
        expect(getDecimalValue([1, 0, 1])).toBe(5);
    });

    test('[0]の引数を渡して0が返却される', () => {
        expect(getDecimalValue([0])).toBe(0);
    });

    test('[1]の引数を渡して1が返却される', () => {
        expect(getDecimalValue([1])).toBe(1);
    });

    test('[1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]の引数を渡して18880が返却される', () => {
        expect(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])).toBe(18880);
    });

    test('[0,0]の引数を渡して0が返却される', () => {
        expect(getDecimalValue([0, 0])).toBe(0);
    });
});