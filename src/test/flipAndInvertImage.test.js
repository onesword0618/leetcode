const flipAndInvertImage = require("./../main/flipAndInvertImage.js");
//      Question
//           Given a binary matrix A, we want to flip the image horizontally,
//           then invert it, and return the resulting image.
//           To flip an image horizontally means that each row of the image is reversed.
//           For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
//           To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
//           For example, inverting [0, 1, 1] results in [1, 0, 0].

describe("画像を表現したバイナリの配列を反転させた配列を返却する", () => {
  describe("flipAndInvertImage(number[][] A) を実行するとき", () => {
    test("numbers = [[1,1,0],[1,0,1],[0,0,0]]を入力して[[1,0,0],[0,1,0],[1,1,1]]が返却されること", () => {
      expect(
        flipAndInvertImage([
          [1, 1, 0],
          [1, 0, 1],
          [0, 0, 0],
        ])
      ).toEqual(
        expect.arrayContaining([
          [1, 0, 0],
          [0, 1, 0],
          [1, 1, 1],
        ])
      );
    });
  });

  describe("flipAndInvertImage(number[][] A) を実行するとき", () => {
    test("numbers = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]を入力して[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]が返却されること", () => {
      expect(
        flipAndInvertImage([
          [1, 1, 0, 0],
          [1, 0, 0, 1],
          [0, 1, 1, 1],
          [1, 0, 1, 0],
        ])
      ).toEqual(
        expect.arrayContaining([
          [1, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 1],
          [1, 0, 1, 0],
        ])
      );
    });
  });
});
