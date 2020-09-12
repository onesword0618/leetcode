const thousandSeparator = require('./../main/thousandSeparator');
//   Question
//      Given an integer n, add a dot (".") as the thousands separator and return it in string format.

describe('渡した引数に千桁毎にカンマを入れた文字列を返却する', () => {

    test('987の引数を渡して987が返却される', () => {
        expect(thousandSeparator(987)).toBe('987');
    });

    test('1234の引数を渡して1.234が返却される', () => {
        expect(thousandSeparator(1234)).toBe('1.234');
    });

    test('123456789の引数を渡して123.456.789が返却される', () => {
        expect(thousandSeparator(123456789)).toBe('123.456.789');
    });

    test('0の引数を渡して0が返却される', () => {
        expect(thousandSeparator(0)).toBe('0');
    });

});