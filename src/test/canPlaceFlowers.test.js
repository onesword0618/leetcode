const canPlaceFlowers = require("./../main/canPlaceFlowers.js");
//    Question
//   Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.
//   Given a flowerbed(represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no - adjacent - flowers rule.
describe("花壇に指定したルールで花を置くことができるか判断して返却する", () => {
  describe("canPlaceFlowers(number[] flowerbed number n)  を実行するとき", () => {
    test("flowerbed = [1,0,0,0,1], n = 1を入力して真を返却すること", () => {
      expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
    });

    test("flowerbed = [1,0,0,0,1], n = 2を入力して偽を返却すること", () => {
      expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
    });
  });
});
