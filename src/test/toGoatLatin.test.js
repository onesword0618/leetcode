const toGoatLatin = require("./../main/toGoatLatin.js");
//      Question
//         A sentence S is given, composed of words separated by spaces.
//         Each word consists of lowercase and uppercase letters only.
//         We would like to convert the sentence to "Goat Latin"(a made - up language similar to Pig Latin.)

//         The rules of Goat Latin are as follows:
//         If a word begins with a vowel(a, e, i, o, or u), append "ma" to the end of the word.
//         For example, the word 'apple' becomes 'applema'.

//         If a word begins with a consonant(i.e.not a vowel), remove the first letter and append it to the end, then add "ma".
//         For example, the word "goat" becomes "oatgma".

//         Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//         For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
//         Return the final sentence representing the conversion from S to Goat Latin.

describe("引数の文字列をあるルールに従って変換bをした結果を返却する", () => {
  describe("toGoatLatin(string S) を実行するとき", () => {
    test("S = I speak Goat Latin を入力してImaa peaksmaaa oatGmaaaa atinLmaaaaaが返却されること", () => {
      expect(toGoatLatin("I speak Goat Latin")).toBe(
        "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
      );
    });

    test("S = The quick brown fox jumped over the lazy dog を入力してheTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaaが返却されること", () => {
      expect(toGoatLatin("The quick brown fox jumped over the lazy dog")).toBe(
        "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
      );
    });
  });
});
