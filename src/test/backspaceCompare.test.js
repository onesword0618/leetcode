const backspaceCompare = require("./../main/backspaceCompare.js");
//   Question
//      Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
//      Note that after backspacing an empty text, the text will continue empty.

describe("引数の文字列同士をバックスペースを実行した後等しくなるかどうか判定する", () => {
  describe("backspaceCompare(string S, string T)が実行されたとき", () => {
    describe("backspaceCompare(S,T)が真の場合", () => {
      test("S = ab#c, T = ad#c の場合、真であること", () => {
        expect(backspaceCompare("ab#c", "ad#c")).toBeTruthy();
      });

      test("S = ab##, T = c#d# の場合、真であること", () => {
        expect(backspaceCompare("ab##", "c#d#")).toBeTruthy();
      });

      test("S = a##c, T = #a#c の場合、真であること", () => {
        expect(backspaceCompare("a##c", "#a#c")).toBeTruthy();
      });
    });

    describe("backspaceCompare(S,T)が偽の場合", () => {
      test("S = a#c, T = bの場合、偽であること", () => {
        expect(backspaceCompare("a#c", "b")).toBeFalsy();
      });
    });
  });
});
