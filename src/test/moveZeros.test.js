const moveZeroes = require("./../main/moveZeros.js");
//    Question
//      Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

describe("引数の配列の中のゼロを他の要素の相対的な位置を崩さないように一番後ろに移動させて結果を返却する", () => {
  describe("moveZeroes(number[] nums)  を実行するとき", () => {
    test("nums = [0,1,0,3,12] を引数に[1,3,12,0,0]が返却されること", () => {
      expect(moveZeroes([0, 1, 0, 3, 12])).toEqual(
        expect.arrayContaining([1, 3, 12, 0, 0])
      );
    });
  });
});
