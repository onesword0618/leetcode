const subtractProductAndSum = require('./../main/subtractProductAndSum');

describe('与えられた数字を乗算する。与えられた数字で加算する。その結果を返却する。', () => {

    test('234を渡して15が返却される。', () => {
        expect(subtractProductAndSum(234)).toBe(15);
    });

    test('4421を渡して21が返却される。', () => {
        expect(subtractProductAndSum(4421)).toBe(21);
    });
});