const minimumMoves = require('./../main/minimumMoves.js');
//    Question
//      In an n * n grid, there is a snake that spans 2 cells and starts moving from the top left corner at(0, 0) and(0, 1).
//      The grid has empty cells represented by zeros and blocked cells represented by ones.
//      The snake wants to reach the lower right corner at(n - 1, n - 2) and(n - 1, n - 1).

describe('迷路から脱出する最小移動を返却する', () => {
    describe('minimumMoves(number[][] grid)  を実行するとき', () => {
        test('grid = [[0,0,0,0,0,1],[1, 1, 0, 0, 1, 0],[0, 0, 0, 0, 1, 1],[0, 0, 1, 0, 1, 0],[0, 1, 1, 0, 0, 0],[0, 1, 1, 0, 0, 0]]を引数に11が返却されること', () => {
            expect(minimumMoves([[0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0]])).toBe(11);
        });

        test('grid = [[0,0,1,1,1,1],[0, 0, 0, 0, 1, 1],[1, 1, 0, 0, 0, 1],[1, 1, 1, 0, 0, 1],[1, 1, 1, 0, 0, 1],[1, 1, 1, 0, 0, 0]]を引数に9が返却されること', () => {
            expect(minimumMoves([[0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 1],
            [1, 1, 1, 0, 0, 1],
            [1, 1, 1, 0, 0, 0]])).toBe(9);
        });
    });
});