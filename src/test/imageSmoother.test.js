const imageSmoother = require("./../main/imageSmoother.js");
//    Question
//      Given a 2D integer matrix M representing the gray scale of an image,
//      you need to design a smoother to make the gray scale of each cell becomes
//      the average gray scale(rounding down) of all the 8 surrounding cells and itself.
//      If a cell has less than 8 surrounding cells, then use as many as you can.

describe("引数の配列を画像に見立ててを指定してなめらかになるようにルールに従って配列を返却する", () => {
  describe("imageSmoother(number[][] M)  を実行するとき", () => {
    test("M = [[1,1,1] [1, 0, 1] [1, 1, 1]]を引数に[[0, 0, 0] [0, 0, 0] [0, 0, 0]]が返却されること", () => {
      expect(
        imageSmoother([
          [1, 1, 1],
          [1, 0, 1],
          [1, 1, 1],
        ])
      ).toEqual(
        expect.arrayContaining([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ])
      );
    });
  });
});
