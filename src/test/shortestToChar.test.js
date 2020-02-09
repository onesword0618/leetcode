const shortestToChar = require('./../main/shortestToChar');

describe('第2引数の文字の距離を第1引数の文字列の1文字ごとで図る', () => {

    test('loveleetcode, eを渡して[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]を返却する。', () => {
        expect(shortestToChar('loveleetcode', 'e'))
            .toEqual(expect.arrayContaining([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]));
    });
});