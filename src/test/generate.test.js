const generate = require("./../main/generate.js");
//    Question
//       Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

describe("引数の数だけパスカルの三角形になる配列を返却する", () => {
  describe("generate(number numRows)  を実行するとき", () => {
    test("numRows =5を引数に[[1][1,1][1,2,1][1,3,3,1][1,4,6,4,1]]が返却されること", () => {
      expect(generate(5)).toEqual(
        expect.arrayContaining([
          [1],
          [1, 1],
          [1, 2, 1],
          [1, 3, 3, 1],
          [1, 4, 6, 4, 1],
        ])
      );
    });
  });
});
