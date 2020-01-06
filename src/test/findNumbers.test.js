const findNumbers = require('./../main/findNumbers');

describe('与えられた数字の配列で共通の桁位置で同じ数字を返却する', () => {

    test('[12,345,2,6,7896]で共通かつ同じ桁位置の数字の2を返却する', () => {
        expect(findNumbers([12, 345, 2, 6, 7896])).toBe(2);
    });

    test('[555,901,482,1771]で共通かつ同じ桁位置の数字の1を返却する', () => {
        expect(findNumbers([555, 901, 482, 1771])).toBe(1);
    });
});