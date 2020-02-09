const smallestRangeI = require('./../main/smallestRangeI');

describe('数字の配列の中で、第2引数の範囲内であるなら追加する', () => {

    test('[1]と0を引数に0を返却する。', () => {
        expect(smallestRangeI([1], 0))
            .toBe(0);
    });

    test('[0,10]と2を引数に6を返却する。', () => {
        expect(smallestRangeI([0, 10], 2))
            .toBe(6);
    });

    test('[1,3,6]と3を引数に0を返却する。', () => {
        expect(smallestRangeI([1, 3, 6], 3))
            .toBe(0);
    });
});