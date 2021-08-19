const isBoomerang = require("./../main/isBoomerang.js");
//    Question
//       A boomerang is a set of 3 points that are all distinct and not in a straight line.
//       Given a list of three points in the plane, return whether these points are a boomerang.

describe("引数の配列がブーメランの位置かどうかを判断して返却する", () => {
  describe("isBoomerang(number[][] points)  を実行するとき", () => {
    test("points = [[1,1],[2,3],[3,2]] を入力して真を返却すること", () => {
      expect(
        isBoomerang([
          [1, 1],
          [2, 3],
          [3, 2],
        ])
      ).toBeTruthy();
    });

    test("points = [[1,1],[2,2],[3,3]]を入力して偽を返却すること", () => {
      expect(
        isBoomerang([
          [1, 1],
          [2, 2],
          [3, 3],
        ])
      ).toBeFalsy();
    });
  });
});
