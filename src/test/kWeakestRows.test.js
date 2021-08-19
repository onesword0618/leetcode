const kWeakestRows = require("./../main/kWeakestRows");
//      Question
//           Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians),
//           return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.
//           A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j,
//           or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

describe("マトリックス内のK個の最も弱い行を返却する", () => {
  describe("kWeakestRows(number[][] mat, number k) を実行するとき", () => {
    test("mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3を入力して[2, 0, 3]が返却されること", () => {
      expect(
        kWeakestRows(
          [
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1],
          ],
          3
        )
      ).toEqual(expect.arrayContaining([2, 0, 3]));
    });

    test("mat = [[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], k = 2を入力して[0,2]が返却されること", () => {
      expect(
        kWeakestRows(
          [
            [1, 0, 0, 0],
            [1, 1, 1, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
          ],
          2
        )
      ).toEqual(expect.arrayContaining([0, 2]));
    });
  });
});
