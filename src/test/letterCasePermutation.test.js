const letterCasePermutation = require("./../main/letterCasePermutation");

describe("引数の英字のアッパーキャメルのパターンを生成する。", () => {
  test("a1b2を引数に渡して、a1b2,a1B2,A1b2,A1B2を返却する。", () => {
    expect(letterCasePermutation("a1b2")).toEqual(
      expect.arrayContaining(["a1b2", "a1B2", "A1b2", "A1B2"])
    );
  });

  test("3z4を引数に渡して、3z4,3Z4を返却する。", () => {
    expect(letterCasePermutation("3z4")).toEqual(
      expect.arrayContaining(["3z4", "3Z4"])
    );
  });

  test("a1b2を引数に渡して、a1b2,a1B2,A1b2,A1B2を返却する。", () => {
    expect(letterCasePermutation("12345")).toEqual(
      expect.arrayContaining(["12345"])
    );
  });
});
