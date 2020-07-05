const numEquivDominoPairs = require('./../main/numEquivDominoPairs.js');
//    Question
//      Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] 
//      if and only if either(a == c and b == d), or(a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
//      Return the number of pairs(i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

describe('引数の配列の要素をひっくり返して一致する数を返却する', () => {
    describe('numEquivDominoPairs(number[][] dominoes)  を実行するとき', () => {
        test('dominoes = [[1,2],[2,1],[3,4],[5,6]]を引数に1が返却されること', () => {
            expect(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])).toBe(1);
        });
    });
});