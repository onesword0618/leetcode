const constructRectangle = require("./../main/constructRectangle");
//      Question
//           A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:
//           1. The area of the rectangular web page you designed must equal to the given target area.
//           2. The width W should not be larger than the length L, which means L >= W.
//           3. The difference between length L and width W should be as small as possible.
//           Return an array[L, W] where L and W are the length and width of the web page you designed in sequence.

describe("引数として渡した数字をもとに長方形の縦横の長さの配列を返却する", () => {
  describe("constructRectangle(number area) を実行するとき", () => {
    test("area = 37を入力して[37,1]が返却されること", () => {
      expect(constructRectangle(37)).toEqual(expect.arrayContaining([37, 1]));
    });

    test("area = 122122を入力して[427,286]が返却されること", () => {
      expect(constructRectangle(122122)).toEqual(
        expect.arrayContaining([427, 286])
      );
    });

    test("area = 4を入力して[2,2]が返却されること", () => {
      expect(constructRectangle(4)).toEqual(expect.arrayContaining([2, 2]));
    });
  });
});
