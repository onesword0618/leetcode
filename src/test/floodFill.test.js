const floodFill = require("./../main/floodFill.js");
//    Question
//       An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
//       Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
//       To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
//       plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on.
//       Replace the color of all of the aforementioned pixels with the newColor.
//       At the end, return the modified image.

//    Note:
//       The length of image and image[0] will be in the range [1, 50].
//       The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
//       The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

describe("第1引数の2次元配列を第2引数、第3引数で座標を指定した箇所を第4引数で塗りつぶした結果の2次元配列を返却する", () => {
  describe("floodFill(number [][] image, number sr, number sc, number newColor)  を実行するとき", () => {
    test("image =[[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2を引数に[[2,2,2],[2,2,0],[2,0,1]]が返却されること", () => {
      expect(
        floodFill(
          [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
          ],
          1,
          1,
          2
        )
      ).toEqual(
        expect.arrayContaining([
          [2, 2, 2],
          [2, 2, 0],
          [2, 0, 1],
        ])
      );
    });
  });
});
