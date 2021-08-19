const sortArrayByParity = require("./../main/sortArrayByParity.js");
//    Question
//      Given an array A of non - negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
//      You may return any answer array that satisfies this condition.

describe("偶数と奇数の出力の要素をまとめて配列を返却する", () => {
  describe("sortArrayByParity(number[] A)  を実行するとき", () => {
    test("A = [3,1,2,4]を引数に[2, 4,3,1]が返却されること", () => {
      expect(sortArrayByParity([3, 1, 2, 4])).toEqual(
        expect.arrayContaining([2, 4, 3, 1])
      );
    });
  });
});
