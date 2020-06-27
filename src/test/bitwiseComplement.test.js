const bitwiseComplement = require('./../main/bitwiseComplement.js');
//    Question
//       Every non-negative integer N has a binary representation.  For example,
//       5 can be represented as "101" in binary, 11 as "1011" in binary,
//       and so on.Note that except for N = 0, there are no leading zeroes in any binary representation.
//       The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.
//       For example, the complement of "101" in binary is "010" in binary.

describe('引数の10進数の整数を２進数の補数を10進数の整数として返却する', () => {
    describe('bitwiseComplement(number N)  を実行するとき', () => {
        test('N = 5を引数に2が返却されること', () => {
            expect(bitwiseComplement(5)).toBe(2);
        });

        test('N = 7を引数に0が返却されること', () => {
            expect(bitwiseComplement(7)).toBe(0);
        });

        test('N = 10を引数に5が返却されること', () => {
            expect(bitwiseComplement(10)).toBe(5);
        });
    });
});