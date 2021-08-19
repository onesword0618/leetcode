const sortByBits = require("./../main/sortByBits");
//      Question
//           Given an integer array arr.
//           You have to sort the integers in the array in ascending order by the number of
//           1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
//           Return the sorted array.

describe("1ビットを表現している配列を並び替えて返却する", () => {
  describe("sortByBits(number[] arr) を実行するとき", () => {
    test("arr = [0,1,2,3,4,5,6,7,8]を入力して[0,1,2,4,8,3,5,6,7]が返却されること", () => {
      expect(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual(
        expect.arrayContaining([0, 1, 2, 4, 8, 3, 5, 6, 7])
      );
    });

    test("arr = [1024,512,256,128,64,32,16,8,4,2,1]を入力して[1,2,4,8,16,32,64,128,256,512,1024]が返却されること", () => {
      expect(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])).toEqual(
        expect.arrayContaining([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024])
      );
    });

    test("arr = [10000,10000]を入力して[10000,10000]が返却されること", () => {
      expect(sortByBits([10000, 10000])).toEqual(
        expect.arrayContaining([10000, 10000])
      );
    });

    test("arr = [2,3,5,7,11,13,17,19]を入力して[2,3,5,17,7,11,13,19]が返却されること", () => {
      expect(sortByBits([2, 3, 5, 7, 11, 13, 17, 19])).toEqual(
        expect.arrayContaining([2, 3, 5, 17, 7, 11, 13, 19])
      );
    });

    test("arr = [10,100,1000,10000]を入力して[10,100,10000,1000]が返却されること", () => {
      expect(sortByBits([10, 100, 1000, 10000])).toEqual(
        expect.arrayContaining([10, 100, 10000, 1000])
      );
    });
  });
});
