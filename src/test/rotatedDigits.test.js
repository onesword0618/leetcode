const rotatedDigits = require("./../main/rotatedDigits.js");
//      Question
//          X is a good number if after rotating each digit individually by 180 degrees,
//          we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.
//          A number is valid if each digit remains a digit after rotation. 0, 1,
//          and 8 rotate to themselves; 2 and 5 rotate to each other (on this case they are rotated in a different direction, in other words 2 or 5 gets mirrored);
//          6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.
//          Now given a positive number N, how many numbers X from 1 to N are good?

describe("1から引数を最大値として範囲回転させて返却する", () => {
  describe("rotatedDigits(number N) を実行するとき", () => {
    test("N = 10 を入力して4が返却されること", () => {
      expect(rotatedDigits(10)).toBe(4);
    });
  });
});
