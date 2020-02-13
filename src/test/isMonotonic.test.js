const isMonotonic = require('./../main/isMonotonic');

describe('配列が右に1ずつ要素が加算された結果であること、または減算された結果になること。', () => {

    test('[1,2,2,3]を渡してtrueが返却される', () => {
        expect(isMonotonic([1, 2, 2, 3])).toBeTruthy();
    });

    test('[6,5,4,4]を渡してtrueが返却される', () => {
        expect(isMonotonic([6, 5, 4, 4])).toBeTruthy();
    });

    test('[1,3,2]を渡してfalseが返却される', () => {
        expect(isMonotonic([1, 3, 2])).toBeFalsy();
    });
});