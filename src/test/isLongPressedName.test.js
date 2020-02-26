const isLongPressedName = require('./../main/isLongPressedName');
//    Question
//        Your friend is typing his name into a keyboard.Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
//        You examine the typed characters of the keyboard.Return True if it is possible that it was your friends name, with some characters(possibly none) being long pressed.

describe('入力された文字列から目的の文字列が入力されているか調査する', () => {

    describe('isLongPressedName が成功するとき', () => {

        test('aaleexからalexが導出できること', () => {
            expect(isLongPressedName('alex', 'aaleex')).toBeTruthy();
        });

        test('lleeeleeからleeleeが導出できること', () => {
            expect(isLongPressedName('leelee', 'lleeelee')).toBeTruthy();
        });

        test('laidenからlaidenが導出できること', () => {
            expect(isLongPressedName('laiden', 'laiden')).toBeTruthy();
        });

    });

    describe('isLongPressedName が失敗するとき', () => {

        test('ssaaeddからsaeedが導出できないこと', () => {
            expect(isLongPressedName('saeed', 'ssaaedd')).toBeFalsy();
        });
    });
});