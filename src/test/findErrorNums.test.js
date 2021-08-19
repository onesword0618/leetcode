const findErrorNums = require("./../main/findErrorNums.js");
//    Question
//      The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
//      Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

describe("壊れている要素を復元する配列を返却する", () => {
  describe("findErrorNums(number[] nums)  を実行するとき", () => {
    test("nums = [1,2,2,4]を引数に[2, 3]が返却されること", () => {
      expect(findErrorNums([1, 2, 2, 4])).toEqual(
        expect.arrayContaining([2, 3])
      );
    });
  });
});
