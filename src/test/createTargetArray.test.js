const createTargetArray = require("./../main/createTargetArray.js");
//   Question
//      Given two arrays of integers nums and index.Your task is to create target array under the following rules:
//          Initially target array is empty.
//          From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
//          Repeat the previous step until there are no elements to read in nums and index.
//      Return the target array.
//      It is guaranteed that the insertion operations will be valid.

describe("2つの配列を提示されたルールに従った配列を返却する", () => {
  describe("createTargetArray([nums],[index])が実行されたとき", () => {
    test("nums = [0,1,2,3,4], index =[4,1,2,3]の場合、[0,4,1,3,2]が返却されること", () => {
      expect(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])).toEqual(
        expect.arrayContaining([0, 4, 1, 3, 2])
      );
    });

    test("nums = [1,2,3,4,0], index = [0,1,2,3,0]の場合、[0,1,2,3,4]が返却されること", () => {
      expect(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])).toEqual(
        expect.arrayContaining([0, 1, 2, 3, 4])
      );
    });

    test("nums = [1], index = [0]の場合、[1]が返却されること", () => {
      expect(createTargetArray([1], [0])).toEqual(expect.arrayContaining([1]));
    });
  });
});
