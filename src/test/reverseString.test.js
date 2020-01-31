const reverseString = require('./../main/reverseString');

describe('第1引数の配列に対して第2引数の配列と関連している数値をまとめる。', () => {

    test('["h","e","l","l","o"]が返却される', () => {
        expect(reverseString(['h', 'e', 'l', 'l', 'o']))
            .toEqual(expect.arrayContaining(['o', 'l', 'l', 'e', 'h']));
    });

    test('["H","a","n","n","a","h"]が返却される', () => {
        expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h']))
            .toEqual(expect.arrayContaining(['h', 'a', 'n', 'n', 'a', 'H']));
    });
});