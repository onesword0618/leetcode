const reverseOnlyLetters = require("./../main/reverseOnlyLetters");

describe("引数を渡して文字位置含めて反転する", () => {
  test("ab-cdを渡してdc-baが返却される", () => {
    expect(reverseOnlyLetters("ab-cd")).toBe("dc-ba");
  });

  test("a-bC-dEf-ghIjを渡してj-Ih-gfE-dCbaが返却される", () => {
    expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toBe("j-Ih-gfE-dCba");
  });

  test("Test1ng-Leet=code-Q!を渡してQedo1ct-eeLg=ntse-T!が返却される", () => {
    expect(reverseOnlyLetters("Test1ng-Leet=code-Q!")).toBe(
      "Qedo1ct-eeLg=ntse-T!"
    );
  });
});
