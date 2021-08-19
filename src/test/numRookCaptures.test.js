const numRookCaptures = require("./../main/numRookCaptures.js");
//    Question
//       On an 8 x 8 chessboard, there is one white rook.
//      There also may be empty squares, white bishops, and black pawns.
//      These are given as characters 'R', '.', 'B', and 'p' respectively.Uppercase characters represent white pieces, and lowercase characters represent black pieces.
//      The rook moves as in the rules of Chess: it chooses one of four cardinal directions(north, east, west, and south), then moves in that direction until it chooses to stop,
//      reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.Also, rooks cannot move into the same square as other friendly bishops.
//      Return the number of pawns the rook can capture in one move.

describe("引数の配列をチェス盤とチェスの駒に見立てて一度にルークが駒を取得できる数を返却する", () => {
  describe("numRookCaptures(character[][] board)  を実行するとき", () => {
    test('board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]を引数に12が返却されること', () => {
      expect(
        numRookCaptures([
          [".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", "p", ".", ".", ".", "."],
          [".", ".", ".", "R", ".", ".", ".", "p"],
          [".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", "p", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", "."],
        ])
      ).toBe(3);
    });

    test('board = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]を引数に682289015が返却されること', () => {
      expect(
        numRookCaptures([
          [".", ".", ".", ".", ".", ".", ".", "."],
          [".", "p", "p", "p", "p", "p", ".", "."],
          [".", "p", "p", "B", "p", "p", ".", "."],
          [".", "p", "B", "R", "B", "p", ".", "."],
          [".", "p", "p", "B", "p", "p", ".", "."],
          [".", "p", "p", "p", "p", "p", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", "."],
        ])
      ).toBe(0);
    });

    test('board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]を引数に682289015が返却されること', () => {
      expect(
        numRookCaptures([
          [".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", "p", ".", ".", ".", "."],
          [".", ".", ".", "p", ".", ".", ".", "."],
          ["p", "p", ".", "R", ".", "p", "B", "."],
          [".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", "B", ".", ".", ".", "."],
          [".", ".", ".", "p", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", "."],
        ])
      ).toBe(3);
    });
  });
});
