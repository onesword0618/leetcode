const rotateString = require('./../main/rotateString');

describe('左辺と右辺で文字位置が全てバラバラになっていること', () => {

    test('abcde, cdeab を渡してtrueが返却される', () => {
        expect(rotateString('abcde', 'cdeab')).toBeTruthy();
    });

    test('abcde, abcedを渡してfalseが返却される', () => {
        expect(rotateString('abcde', 'abced')).toBeFalsy();
    });
});