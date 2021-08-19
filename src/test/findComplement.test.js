const findComplement = require("./../main/findComplement");

describe("正の引数の補数を返却する  ", () => {
  test("5を渡して2が返却される", () => {
    expect(findComplement(5)).toBe(2);
  });

  test("1を渡して0が返却される", () => {
    expect(findComplement(1)).toBe(0);
  });
});
