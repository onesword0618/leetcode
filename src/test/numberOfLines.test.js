const numberOfLines = require("./../main/numberOfLines.js");
//    Question
//      We are to write the letters of a given string S, from left to right into lines.Each line has maximum width 100 units,
//      and if writing a letter would cause the width of the line to exceed 100 units,
//      it is written on the next line.We are given an array widths,
//      an array where widths[0] is the width of 'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.
//      Now answer two questions: how many lines have at least one character from S,
//      and what is the width used by the last such line ? Return your answer as an integer list of length 2.

describe("引数の配列は、文字の長さをしめす。与式の文字列をすべてき書き込むには、何行とその最終行はいくつの幅を使うのかを返却する", () => {
  describe("numberOfLines(number[] width , string S)  を実行するとき", () => {
    test('widths =[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],"abcdefghijklmnopqrstuvwxyz" を引数に[3, 60]が返却されること', () => {
      expect(
        numberOfLines(
          [
            10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
            10, 10, 10, 10, 10, 10, 10, 10, 10,
          ],
          "abcdefghijklmnopqrstuvwxyz"
        )
      ).toEqual(expect.arrayContaining([3, 60]));
    });

    test('widths =[4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],"abcdefghijklmnopqrstuvwxyz" を引数に[3, 60]が返却されること', () => {
      expect(
        numberOfLines(
          [
            4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
            10, 10, 10, 10, 10, 10, 10, 10, 10,
          ],
          "bbbcccdddaaa"
        )
      ).toEqual(expect.arrayContaining([2, 4]));
    });
  });
});
