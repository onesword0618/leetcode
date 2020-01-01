const longestCommonPrefix = require('./../main/longestCommonPrefix');

describe('共通のプレフィックスを見つけたらその箇所を返す', () => {

    test('共通のプレフィックス fl を返す', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });

    test('共通のプレフィックスが存在しない', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });
});