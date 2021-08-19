const maximum69Number = require("./../main/maximum69Number");

describe("最大桁の6を9に変換する", () => {
  test("9669を与えて9969を返す", () => {
    expect(maximum69Number(9669)).toBe(9969);
  });
});
