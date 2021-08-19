const relativeSortArray = require("./../main/relativeSortArray");

describe("第1引数の配列に対して第2引数の配列と関連している数値をまとめる。", () => {
  test("[2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]が返却される", () => {
    expect(
      relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
    ).toEqual(expect.arrayContaining([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]));
  });
});
