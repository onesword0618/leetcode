const getRow = require("./../main/getRow.js");
//    Question
//      Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
//      Note that the row index starts from 0.

describe("パスカルの三角形のインデックスの列を導出して返却する", () => {
  describe("getRow(number rowIndex)  を実行するとき", () => {
    test("rowIndex = 3を引数に[1,3,3,1]が返却されること", () => {
      expect(getRow(3)).toEqual(expect.arrayContaining([1, 3, 3, 1]));
    });
  });
});
