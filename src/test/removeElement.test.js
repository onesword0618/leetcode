const removeElement = require("./../main/removeElement.js");
//    Question
//       Given an array nums and a value val, remove all instances of that value in -place and return the new length.
//       Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.
//       The order of elements can be changed.It doesn't matter what you leave beyond the new length.

describe("第一引数に渡した配列から第二引数で渡した値を取り除いて新しい長さを作成する", () => {
  describe("removeElement([nums],nums) が実行されるとき", () => {
    test("number[]=[3,2,2,3],number=3を入力して4が返却されること", () => {
      expect(removeElement([3, 2, 2, 3], 3)).toBe(4);
    });

    test("number[]=[0,1,2,2,3,0,4,2],number=2を入力して8が返却されること", () => {
      expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(8);
    });
  });
});
