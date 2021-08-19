const defangIPaddr = require("./../main/defangIPaddr");

describe("入力したIPアドレスの区切りに[]を付与する", () => {
  test("1.1.1.1が1[.]1[.]1[.]1が返却される", () => {
    expect(defangIPaddr("1.1.1.1")).toBe("1[.]1[.]1[.]1");
  });

  test("255.100.50.0が255[.]100[.]50[.]0が返却される", () => {
    expect(defangIPaddr("255.100.50.0")).toBe("255[.]100[.]50[.]0");
  });
});
