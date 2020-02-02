const minimumAbsDifference = require('./../main/minimumAbsDifference');

describe('引数の配列で、最小値の絶対値のペアを探す', () => {

    test('[4,2,1,3]を引数として渡して[1,2],[2,3],[3,4]が返却される', () => {
        expect(minimumAbsDifference([4, 2, 1, 3])).toContainEqual([1, 2], [2, 3], [3, 4]);
    });

    test('[1,3,6,10,15]を引数として渡して[1,3]が返却される', () => {
        expect(minimumAbsDifference([1, 3, 6, 10, 15])).toContainEqual([1, 3]);
    });

    test('[3,8,-10,23,19,-4,-14,27]を引数として渡して[-14,-10],[19,23],[23,27]が返却される', () => {
        expect(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])).toContainEqual([-14, -10], [19, 23], [23, 27]);
    });
});