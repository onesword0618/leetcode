const toLowerCase = require("./../main/toLowerCase");

describe("与えられた文字列の大文字を小文字に変換して返却する。", () => {
  test("Helloを渡してhelloが返却される", () => {
    expect(toLowerCase("Hello")).toBe("hello");
  });

  test("hereを渡してhereが返却される。", () => {
    expect(toLowerCase("here")).toBe("here");
  });

  test("LOVELYを渡してlovelyが返却される。", () => {
    expect(toLowerCase("LOVELY")).toBe("lovely");
  });
});
