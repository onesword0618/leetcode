const hasAlternatingBits = require("./../main/hasAlternatingBits");
// Question
//     Given a positive integer, check whether it has alternating bits: namely,
//     if two adjacent bits will always have different values.

describe("ビットが交互になっているかを返却する", () => {
  test("5は真であること", () => {
    expect(hasAlternatingBits(5)).toBeTruthy();
  });

  test("7は偽であること", () => {
    expect(hasAlternatingBits(7)).toBeFalsy();
  });

  test("11は偽であること", () => {
    expect(hasAlternatingBits([1, 2, 3, 4, 4, 3, 2, 1])).toBeFalsy();
  });

  test("10は真であること", () => {
    expect(hasAlternatingBits([1])).toBeTruthy();
  });

  test("3は偽であること", () => {
    expect(hasAlternatingBits([1, 1])).toBeFalsy();
  });
});
