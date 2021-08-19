const selfDividingNumbers = require("./../main/selfDividingNumbers.js");
//    Question
//      A self-dividing number is a number that is divisible by every digit it contains.
//      For example, 128 is a self - dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
//      Also, a self - dividing number is not allowed to contain the digit zero.
//      Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

describe("引数の数字の下限と上限を決めて自己分割数できる数の配列を返却する", () => {
  describe("selfDividingNumbers(number left = 1, number right = 22)  を実行するとき", () => {
    test("left = 1, right = 22を引数に [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]が返却されること", () => {
      expect(selfDividingNumbers(1, 22)).toEqual(
        expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22])
      );
    });
  });
});
