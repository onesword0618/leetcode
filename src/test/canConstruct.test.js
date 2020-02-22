const canConstruct = require('./../main/canConstruct');
//    Question
//    Given an arbitrary ransom note string and another string containing letters from all the magazines,
//    write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.
//    Each letter in the magazine string can only be used once in your ransom note.
//    Note:
//        You may assume that both strings contain only lowercase letters.
//    canConstruct("a", "b") -> false
//    canConstruct("aa", "ab") -> false
//    canConstruct("aa", "aab") -> true

describe('第1引数の文字列を第2引数の文字列で作成できる \n  第2引数の文字列は1回のみ使用可能であり小文字を前提とする', () => {

    describe('canConstruct が成功するとき', () => {
        test('第1引数の文字列を第2引数の文字列が持っていること', () => {
            expect(canConstruct('aa', 'aab')).toBeTruthy();
        });
    });

    describe('canConstruct が失敗するとき', () => {
        test('第2引数にない文字列を第1引数の文字列が持っていること', () => {
            expect(canConstruct('a', 'b')).toBeFalsy();
        });

        test('第1引数の文字列が複数の同じ文字を持ち、第2引数の文字列に同じ数の文字がないこと', () => {
            expect(canConstruct('aa', 'ab')).toBeFalsy();
        });
    });
});