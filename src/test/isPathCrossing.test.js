const isPathCrossing = require("./../main/isPathCrossing.js");
//    Question
//       Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively.You start at the origin(0, 0) on a 2D plane and walk on the path specified by path.
//       Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return False otherwise.

describe("指定した方向に進み元の位置を2回以上通過するか判断して返却する", () => {
  describe("isPathCrossing(string path)  を実行するとき", () => {
    test("path = NESを入力して偽を返却すること", () => {
      expect(isPathCrossing("NES")).toBeFalsy();
    });

    test("path = NESWWを入力して真を返却すること", () => {
      expect(isPathCrossing("NESWW")).toBeTruthy();
    });
  });
});
