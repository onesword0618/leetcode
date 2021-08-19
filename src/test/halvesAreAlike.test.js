const halvesAreAlike = require("./../main/halvesAreAlike");
//   Question
//      You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
//      Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
//      Return true if a and b are alike. Otherwise, return false.

describe("与えられた文字列を半分にした場合に類似かどうかを返却する", () => {
  test("bookを渡してtrueが返却される", () => {
    expect(halvesAreAlike("book")).toBeTruthy();
  });

  test("textbookを渡してfalseが返却される", () => {
    expect(halvesAreAlike("textbook")).toBeFalsy();
  });

  test("MerryChristmasを渡してfalseが返却される", () => {
    expect(halvesAreAlike("MerryChristmas")).toBeFalsy();
  });

  test("AbCdEfGhを渡してtrueが返却される", () => {
    expect(halvesAreAlike("AbCdEfGh")).toBeTruthy();
  });
});
