const numJewelsInStones = require("./../main/numJewelsInStones.js");
//   Question
//      You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
//      Each character in S is a type of stone you have.You want to know how many of the stones you have are also jewels.
//      The letters in J are guaranteed distinct, and all characters in J and S are letters.Letters are case sensitive, so "a" is considered a different type of stone from "A".

describe("第一引数の文字列が第二引数の文字列に含まれているのかその数を返却する \n 大文字と小文字は区別する", () => {
  describe("numJewelsInStones(String,String)が実行されたとき", () => {
    test("String = aA, String = aAAbbbbの場合、3が返却されること", () => {
      expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
    });

    test("String = z, String = ZZの場合、0が返却されること", () => {
      expect(numJewelsInStones("z", "ZZ")).toBe(0);
    });
  });
});
