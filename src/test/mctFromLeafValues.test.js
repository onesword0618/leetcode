const mctFromLeafValues = require('./../main/mctFromLeafValues');

describe('正の数字の配列の中を利用してバイナリツリーを作成する。', () => {

    test('[6,2,4]を渡して32が返却される', () => {
        expect(mctFromLeafValues([6, 2, 4]))
            .toBe(32);
    });
});