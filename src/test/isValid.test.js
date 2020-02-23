const isValid = require('./../main/isValid');

describe('開いたbracketsがあれば、同じタイプのbracketsで閉じているかどうか', () => {

    test(' ( ) の入力が正しいこと', () => {
        expect(isValid('()')).toBeTruthy();
    });

    test(' ( ) [] {} の入力が正しいこと', () => {
        expect(isValid('()[]{}')).toBeTruthy();
    });

    test(' ( ] の入力が不正であること', () => {
        expect(isValid('(]')).toBeFalsy();
    });


});