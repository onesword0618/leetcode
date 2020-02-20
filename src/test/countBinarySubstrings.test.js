const countBinarySubstrings = require('./../main/countBinarySubstrings');

describe('連続した0と1の組み合わせの数を算出する', () => {

    test('00110011を引数にして6が返却される', () => {
        expect(countBinarySubstrings('00110011')).toBe(6);
    });

    test('10101を渡して4が返却される', () => {
        expect(countBinarySubstrings('10101')).toBe(4);
    });
});