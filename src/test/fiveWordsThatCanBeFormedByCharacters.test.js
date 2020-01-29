const countCharacters = require('./../main/fiveWordsThatCanBeFormedByCharacters');

describe('与えられた単語の配列を引数の文字で計算して共通の部分を加算して数字を返却する', () => {

    test('[cat, bt, hat, tree],atach で数字の6を返却する', () => {
        expect(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')).toBe(6);
    });

    test('[hello, world, leetcode],welldonehoneyr で数字の10を返却する', () => {
        expect(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')).toBe(10);
    });
});