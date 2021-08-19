const missingNumber = require("./../main/missingNumber");

describe("与えられた配列の始めと終わりの距離を導出して返却する。", () => {
  test("[3,0,1]を渡して、2が返却される", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test("[9,6,4,2,3,5,7,0,1]を渡して、8が返却される", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });

  test("[0]を渡して、1が返却される", () => {
    expect(missingNumber([0])).toBe(1);
  });
});
