const removeDuplicates = require('./../main/removeDuplicates');

describe('与えられた文字列で隣り合った同じ文字は取り除く。最終的に同じ文字がなくなる。', () => {

    test('abbacaを引数にしてcaを返却する。', () => {
        expect(removeDuplicates('abbaca')).toBe('ca');
    });
});