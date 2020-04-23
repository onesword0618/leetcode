const tictactoe = require('./../main/tictactoe.js');
//      Question
//           Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
//           Here are the rules of Tic-Tac-Toe:
//           Players take turns placing characters into empty squares (" ").
//           The first player A always places "X" characters, while the second player B always places "O" characters.
//           "X" and "O" characters are always placed into empty squares, never on filled ones.
//           The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
//           The game also ends if all squares are non-empty.
//           No more moves can be played if the game is over.
//           Given an array moves where each element is another array of size 2 corresponding to the row
//           and column of the grid where they mark their respective character in the order in which A and B play.
//           Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".
//           You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.

describe('三目並べの勝負を行った結果を返却する', () => {

    describe('tictactoe(number[][] moves) を実行するとき', () => {

        test('moves =  [[0,0],[2,0],[1,1],[2,1],[2,2]] を入力してAが返却されること', () => {
            expect(tictactoe([
                [0, 0],
                [2, 0],
                [1, 1],
                [2, 1],
                [2, 2]
            ])).toBe('A');
        });

        test('moves =  [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]] を入力してBが返却されること', () => {
            expect(tictactoe([
                [0, 0],
                [1, 1],
                [0, 1],
                [0, 2],
                [1, 0],
                [2, 0],
            ])).toBe('B');
        });

        test('moves =  [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]] を入力してDrawが返却されること', () => {
            expect(tictactoe([
                [0, 0],
                [1, 1],
                [2, 0],
                [1, 0],
                [1, 2],
                [2, 1],
                [0, 1],
                [0, 2],
                [2, 2]
            ])).toBe('Draw');
        });

        test('moves = [[0,0],[1,1]] を入力してPendingが返却されること', () => {
            expect(tictactoe([
                [0, 0],
                [1, 1]
            ])).toBe('Pending');
        });
    });
});