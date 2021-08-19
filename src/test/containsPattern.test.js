const containsPattern = require("./../main/containsPattern");
//    Question
//       Given an array of positive integers arr,  find a pattern of length m that is repeated k or more times.
//       A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping.
//       A pattern is defined by its length and the number of repetitions.
//       Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

describe("配列を指定したペアで決めた数繰り返せるかを判断して返却する", () => {
  describe("containsPattern(number num)  を実行するとき", () => {
    test("arr = [1,2,4,4,4,4],m = 1, k = 3を入力して真を返却すること", () => {
      expect(containsPattern([1, 2, 4, 4, 4, 4], 1, 3)).toBeTruthy();
    });

    test("arr = [1,2,1,2,1,1,1,3],m = 2, k = 2を入力して真を返却すること", () => {
      expect(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)).toBeTruthy();
    });

    test("arr = [1,2,1,2,1,3],m = 2, k = 3を入力して偽を返却すること", () => {
      expect(containsPattern([1, 2, 1, 2, 1, 3], 2, 3)).toBeFalsy();
    });

    test("arr = [1,2,3,1,2],m = 2, k = 2を入力して偽を返却すること", () => {
      expect(containsPattern([1, 2, 3, 1, 2], 2, 2)).toBeFalsy();
    });

    test("arr = [2,2,2,2],m = 2, k = 3入力して偽を返却すること", () => {
      expect(containsPattern([2, 2, 2, 2], 2, 3)).toBeFalsy();
    });
  });
});
