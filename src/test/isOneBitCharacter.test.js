const isOneBitCharacter = require("./../main/isOneBitCharacter.js");
//    Question
//    We have two special characters.The first character can be represented by one bit 0.
//    The second character can be represented by two bits(10 or 11).
//    Now given a string represented by several bits.Return whether the last character
//    must be a one - bit character or not.The given string will always end with a zero.

describe("引数で配列の数を1ビット、2ビットで表せるかどうか判断して返却する", () => {
  describe("isOneBitCharacter(number[] bits)  を実行するとき", () => {
    test("bits = [1,0,0] を入力して真を返却すること", () => {
      expect(isOneBitCharacter([1, 0, 0])).toBeTruthy();
    });

    test("bits = [1,1,1,0]を入力して偽を返却すること", () => {
      expect(isOneBitCharacter([1, 1, 1, 0])).toBeFalsy();
    });
  });
});
