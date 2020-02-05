const singleNumber = require('./../main/singleNumber');

describe('引数で与えられるのは空がない数字の配列 \n 全ての要素はペアになっている。一つの要素になっているのを見つける。', () => {

    test('[2,2,1]を渡して、1が返却される', () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });

    test('[4,1,2,1,2]を渡して、4が返却される', () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });
});