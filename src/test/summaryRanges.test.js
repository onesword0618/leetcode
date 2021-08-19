const summaryRanges = require("./../main/summaryRanges.js");
//    Question
//      You are given a sorted unique integer array nums.
//      Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is,
//      each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
//      Each range [a,b] in the list should be output as:

describe("引数の要素を並び替えを返却する", () => {
  describe("summaryRanges(number[] nums)を実行するとき", () => {
    test('nums = [0,1,2,4,5,7] を入力して["0->2","4->5","7"]が返却されること', () => {
      expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(
        expect.arrayContaining(["0->2", "4->5", "7"])
      );
    });

    test('nums = [0,2,3,4,6,8,9] を入力して["0","2->4","6","8->9"]が返却されること', () => {
      expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(
        expect.arrayContaining(["0", "2->4", "6", "8->9"])
      );
    });

    test("nums = [] を入力して[]が返却されること", () => {
      expect(summaryRanges([])).toEqual(expect.arrayContaining([]));
    });

    test('nums = [-1] を入力して["-1"]が返却されること', () => {
      expect(summaryRanges([-1])).toEqual(expect.arrayContaining(["-1"]));
    });

    test('nums = [0] を入力して["0"]が返却されること', () => {
      expect(summaryRanges([0])).toEqual(expect.arrayContaining(["0"]));
    });
  });
});
