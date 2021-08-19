const buildArray = require("./../main/buildArray");
//      Question
//           Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.
//           Build the target array using the following operations:
//           Push: Read a new element from the beginning list, and push it in the array.
//           Pop: delete the last element of the array.
//           If the target array is already built, stop reading more elements.
//           You are guaranteed that the target array is strictly increasing, only containing numbers between 1 to n inclusive.
//           Return the operations to build the target array.
//           You are guaranteed that the answer is unique.

describe("引数の配列をスタック操作をした配列を返却する", () => {
  describe("buildArray(number[] target,number n) を実行するとき", () => {
    test('target = [1,3],n = 3を入力して["Push","Push","Pop","Push"]が返却されること', () => {
      expect(buildArray([1, 3], 3)).toEqual(
        expect.arrayContaining(["Push", "Push", "Pop", "Push"])
      );
    });

    test('target = [1,2,3],n = 3を入力して["Push","Push","Push"]が返却されること', () => {
      expect(buildArray([1, 2, 3], 3)).toEqual(
        expect.arrayContaining(["Push", "Push", "Push"])
      );
    });

    test('target = [1,2],n = 4を入力して["Push","Push"]が返却されること', () => {
      expect(buildArray([1, 2], 4)).toEqual(
        expect.arrayContaining(["Push", "Push"])
      );
    });

    test('target = [2,3,4],n = 4を入力して["Push", "Pop", "Push", "Push", "Push"]が返却されること', () => {
      expect(buildArray([2, 3, 4], 4)).toEqual(
        expect.arrayContaining(["Push", "Pop", "Push", "Push", "Push"])
      );
    });
  });
});
