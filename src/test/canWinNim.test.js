const canWinNim = require("./../main/canWinNim.js");
//    Question
//        You are playing the following Nim Game with your friend:
//        There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones.
//        The one who removes the last stone will be the winner. You will take the first turn to remove the stones.
//        Both of you are very clever and have optimal strategies for the game.
//        Write a function to determine whether you can win the game given the number of stones in the heap.

describe("引数の数字をアルゴリズムに従って計算しゲームに勝利できるかを判定する", () => {
  describe("canWinNim(nums)が実行されたとき", () => {
    describe("canWinNim(nums)が真の場合", () => {
      test("nums = 3の場合、勝利すること", () => {
        expect(canWinNim(3)).toBeTruthy();
      });
    });

    describe("canWinNim(nums)が偽の場合", () => {
      test("nums = 4の場合、敗北すること", () => {
        expect(canWinNim(4)).toBeFalsy();
      });
    });
  });
});
