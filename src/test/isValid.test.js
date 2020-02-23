const isValid = require('./../main/isValid');
//   Question
//   Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//   An input string is valid
//   if :
//        1. Open brackets must be closed by the same type of brackets.
//        2. Open brackets must be closed in the correct order.
//    Note that an empty string is also considered valid.

describe('引数に渡した文字列のbracketsが次の条件を満たしている \n 同じ種類のbracketsで閉じられていること \n bracketsの始まりと終わりがセットになっていること', () => {

    describe('isValid が成功するとき', () => {

        test(' ( ) の入力が正しいこと', () => {
            expect(isValid('()')).toBeTruthy();
        });

        test(' ( ) [] {} の入力が正しいこと', () => {
            expect(isValid('()[]{}')).toBeTruthy();
        });
    });

    describe('isValid が失敗するとき', () => {
        test(' ( ] の入力が不正であること', () => {
            expect(isValid('(]')).toBeFalsy();
        });
    });
});