const gardenNoAdj = require("./../main/gardenNoAdj.js");
//    Question
//      You have N gardens, labelled 1 to N.  In each garden, you want to plant one of 4 types of flowers.
//      paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.
//      Also, there is no garden that has more than 3 paths coming into or leaving it.
//      Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.
//      Return any such a choice as an array answer, where answer[i] is the type of flower planted in the(i + 1) - th garden.The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

describe("庭園に花を指定したルールで植えるときのパスの配列を返却する", () => {
  describe("gardenNoAdj(number N,number[][] paths)  を実行するとき", () => {
    test("N = 3, paths =[[1,2],[2,3],[3,1]]を引数に[1,2,3]が返却されること", () => {
      expect(
        gardenNoAdj(3, [
          [1, 2],
          [2, 3],
          [3, 1],
        ])
      ).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    test("N = 4, paths =[[1,2],[2,3],[3,1]]を引数に[1,2,1,2]が返却されること", () => {
      expect(
        gardenNoAdj(4, [
          [1, 2],
          [3, 4],
        ])
      ).toEqual(expect.arrayContaining([1, 2, 1, 2]));
    });

    test("N = 4 , paths =[[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]を引数に[1,2,3,4]が返却されること", () => {
      expect(
        gardenNoAdj(4, [
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 1],
          [1, 3],
          [2, 4],
        ])
      ).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    });
  });
});
