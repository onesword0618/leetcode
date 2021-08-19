const evalRPN = require("./../main/evalRPN");
//   Question
//      Evaluate the value of an arithmetic expression in Reverse Polish Notation.
//      Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
//      Note that division between two integers should truncate toward zero.
//      It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

describe("逆ポーランド記法の結果を返却する", () => {
  describe("evalRPN (string[] tokens) を実行するとき", () => {
    test('tokens = ["2","1","+","3","*"]を入力して9が返却されること', () => {
      expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
    });

    test('tokens = ["4","13","5","/","+"]を入力して6が返却されること', () => {
      expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
    });

    test('tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]を入力して22が返却されること', () => {
      expect(
        evalRPN([
          "10",
          "6",
          "9",
          "3",
          "+",
          "-11",
          "*",
          "/",
          "*",
          "17",
          "+",
          "5",
          "+",
        ])
      ).toBe(22);
    });
  });
});
