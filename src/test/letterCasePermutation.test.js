const letterCasePermutation = require('./../main/letterCasePermutation');

describe('test概要', () => {

    test('テストコメントと期待', () => {
        expect(letterCasePermutation('abbaca')).toBe('ca');
    });
});