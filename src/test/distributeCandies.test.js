const distributeCandies = require('./../main/distributeCandies');

describe('キャンディーの種類の数字の配列。姉妹にあげる最大数', () => {

    test('[1,1,2,2,3,3]を渡して3が返却される', () => {
        expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3);
    });

    test('[1,1,2,3]を渡して3が返却される', () => {
        expect(distributeCandies([1, 1, 2, 3])).toBe(2);
    });
});