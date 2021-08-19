const findPoisonedDuration = require("./../main/findPoisonedDuration");
//   Question
//      Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe,
//      Ashe gets poisoned for a exactly duration seconds.
//      More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1].
//      If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.
//      You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.
//      Return the total number of seconds that Ashe is poisoned.

describe("英雄が毒を受けている時間の結果を返却する", () => {
  describe("findPoisonedDuration (number[] timeSeries,number duration) を実行するとき", () => {
    test("timeSeries = [1,4], duration = 2を入力して4が返却されること", () => {
      expect(findPoisonedDuration([1, 4], 2)).toBe(4);
    });

    test("timeSeries = [1,2], duration = 2を入力して3が返却されること", () => {
      expect(findPoisonedDuration([1, 2], 2)).toBe(3);
    });
  });
});
