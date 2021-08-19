const judgeCircle = require("./../main/judgeCircle.js");
//    Question
//    There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
//    The move sequence is represented by a string, and the character moves[i] represents its ith move.Valid moves are R(right), L(left), U(up), and D(down).If the robot returns to the origin after it finishes all of its moves, return true.Otherwise, return false.
describe("座標で元の位置に戻るかどうかの操作を配列で定義。その配列が妥当かを判断して返却する", () => {
  describe("judgeCircle(number[] moves)  を実行するとき", () => {
    test("moves = UDを入力して真を返却すること", () => {
      expect(judgeCircle("UD")).toBeTruthy();
    });

    test("moves = LLを入力して偽を返却すること", () => {
      expect(judgeCircle("LL")).toBeFalsy();
    });
  });
});
