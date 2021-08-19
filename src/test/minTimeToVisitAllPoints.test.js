const minTimeToVisitAllPoints = require("./../main/minTimeToVisitAllPoints");

describe("与えられた座標を最短で通過するときの時間を算出する", () => {
  test("[[1,1],[3,4],[-1,0]]の場合は、7を返す", () => {
    expect(
      minTimeToVisitAllPoints([
        [1, 1],
        [3, 4],
        [-1, 0],
      ])
    ).toBe(7);
  });

  test("[[3,2],[-2,2]]の場合は、5を返す", () => {
    expect(
      minTimeToVisitAllPoints([
        [3, 2],
        [-2, 2],
      ])
    ).toBe(5);
  });
});
