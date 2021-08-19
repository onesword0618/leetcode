const sortArrayByParityII = require("./../main/sortArrayByParityII.js");
//    Question
//      Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
//      Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
//      You may return any answer array that satisfies this condition.

describe("偶数と奇数が昇順になるように配列を返却する", () => {
  describe("sortArrayByParityII(number A)  を実行するとき", () => {
    test("A = [4,2,5,7]を引数に[4, 5, 2, 7]が返却されること", () => {
      expect(sortArrayByParityII([4, 2, 5, 7])).toEqual(
        expect.arrayContaining([4, 5, 2, 7])
      );
    });
  });
});
