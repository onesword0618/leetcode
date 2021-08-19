const romanToInt = require("./../main/romanToInt");

describe("ローマ数字を数値に変換する", () => {
  test("IIIを入力して3が返却されること", () => {
    expect(romanToInt("III")).toBe(3);
  });

  test("IVを入力して4が返却されること", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test("IXを入力して9が返却されること", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  test("LVIIIを入力して58が返却されること", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  test("MCMXCIVを入力して1994が返却されること", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
