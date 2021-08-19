const interpret = require("./../main/interpret");
//      Question
//        You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.
//        Given the string command, return the Goal Parser's interpretation of command.

describe("とあるルールに沿った文字を解釈するパーサーの結果を導出する", () => {
  describe("interpret(string command) を実行するとき", () => {
    test("command = G()(al) を入力してGoalが返却されること", () => {
      expect(interpret("G()(al)")).toBe("Goal");
    });

    test("command = G()()()()(al) を入力してGooooalが返却されること", () => {
      expect(interpret("G()()()()(al)")).toBe("Gooooal");
    });

    test("command = (al)G(al)()()G を入力してalGalooGが返却されること", () => {
      expect(interpret("(al)G(al)()()G")).toBe("alGalooG");
    });
  });
});
