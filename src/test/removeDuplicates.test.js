const removeDuplicates = require('./../main/removeDuplicates');

describe('test概要', () => {

    test('テストコメントと期待', () => {
        expect(removeDuplicates('abbaca')).toBe('ca');
    });
});