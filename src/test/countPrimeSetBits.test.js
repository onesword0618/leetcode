const countPrimeSetBits = require("./../main/countPrimeSetBits.js");
//      Question
//          Given two integers L and R,
//          find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.
//          (Recall that the number of set bits an integer has is the number of 1s present when written in binary.
//          (For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

describe("バイナリ表現でビットの素数を持つ範囲の数のカウントを返却する", () => {
  describe("countPrimeSetBits(number L , number R) を実行するとき", () => {
    test("L = 6, R = 10 を入力して4が返却されること", () => {
      expect(countPrimeSetBits(6, 10)).toBe(4);
    });

    test("L = 10, R = 15 を入力して5が返却されること", () => {
      expect(countPrimeSetBits(10, 15)).toBe(5);
    });
  });
});
