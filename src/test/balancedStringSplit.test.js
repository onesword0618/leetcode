const balancedStringSplit = require("./../main/balancedStringSplit");

describe("渡した文字列を同量の文字列に分割した数を計測する。", () => {
  test("RLRRLLRLRLを渡して4が返却される。", () => {
    expect(balancedStringSplit("RLRRLLRLRL")).toBe(4);
  });

  test("RLLLLRRRLRを渡して3が返却される。", () => {
    expect(balancedStringSplit("RLLLLRRRLR")).toBe(3);
  });

  test("LLLLRRRRを渡して1が返却される。", () => {
    expect(balancedStringSplit("LLLLRRRR")).toBe(1);
  });

  test("RLRRRLLRLLを渡して2が返却される。", () => {
    expect(balancedStringSplit("RLRRRLLRLL")).toBe(2);
  });
});
