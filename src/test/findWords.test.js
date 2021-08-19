const findWords = require("./../main/findWords");

describe("キーボードの横1行の文字列で構成される単語があれば返す", () => {
  test("Hello,Alaska,Dad,Peaceを入力して,Alaska, Dadが返却される。", () => {
    expect(findWords(["Hello", "Alaska", "Dad", "Peace"])).toEqual(
      expect.arrayContaining(["Alaska", "Dad"])
    );
  });
});
