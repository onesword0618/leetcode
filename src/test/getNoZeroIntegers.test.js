const getNoZeroIntegers = require("./../main/getNoZeroIntegers");
//   Question
//      Given an integer n. No-Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.
//      Return a list of two integers [A, B] where:
//      A and B are No-Zero integers.
//      A + B = n
//      It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

describe("引数の値を与えてゼロなしの整数の合計の配列にして返却する", () => {
  test("2の引数を渡して[1,1]が返却される", () => {
    expect(getNoZeroIntegers(2)).toEqual(expect.arrayContaining([1, 1]));
  });

  test("11の引数を渡して[2,9]が返却される", () => {
    expect(getNoZeroIntegers(11)).toEqual(expect.arrayContaining([2, 9]));
  });

  test("10000の引数を渡して[1,9999]が返却される", () => {
    expect(getNoZeroIntegers(10000)).toEqual(expect.arrayContaining([1, 9999]));
  });

  test("69の引数を渡して[1, 68]が返却される", () => {
    expect(getNoZeroIntegers(69)).toEqual(expect.arrayContaining([1, 68]));
  });

  test("1010の引数を渡して[11,999]が返却される", () => {
    expect(getNoZeroIntegers(1010)).toEqual(expect.arrayContaining([11, 999]));
  });
});
