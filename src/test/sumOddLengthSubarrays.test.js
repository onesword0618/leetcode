const sumOddLengthSubarrays = require("./../main/sumOddLengthSubarrays");
//   Question
//      Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
//      A subarray is a contiguous subsequence of the array.
//      Return the sum of all odd-length subarrays of arr.

describe("渡した引数の配列の順次加算した結果を返却する", () => {
  test("[1,4,2,5,3]の引数を渡して58が返却される", () => {
    expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toBe(58);
  });

  test("[1,2]の引数を渡して3が返却される", () => {
    expect(sumOddLengthSubarrays([1, 2])).toBe(3);
  });

  test("[10,11,12]の引数を渡して66が返却される", () => {
    expect(sumOddLengthSubarrays([10, 11, 12])).toBe(66);
  });
});
