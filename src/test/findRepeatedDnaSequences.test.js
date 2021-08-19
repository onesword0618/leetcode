const findRepeatedDnaSequences = require("./../main/findRepeatedDnaSequences");
//    Question
//      The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
//      For example, "ACGAATTCCG" is a DNA sequence.
//      When studying DNA, it is useful to identify repeated sequences within the DNA.
//      Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

describe("渡された文字列から複数回のパターンが出ている文字列のグループを返却する", () => {
  describe("findRepeatedDnaSequences( s string) が", () => {
    test('s = AAAAACCCCCAAAAACCCCCCAAAAAGGGTTTを入力して["AAAAACCCCC","CCCCCAAAAA"]が返却されること', () => {
      expect(
        findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
      ).toEqual(expect.arrayContaining(["AAAAACCCCC", "CCCCCAAAAA"]));
    });

    test('s = AAAAAAAAAAAAAを入力して["AAAAAAAAAA"]が返却されること', () => {
      expect(findRepeatedDnaSequences("AAAAAAAAAAAAA")).toEqual(
        expect.arrayContaining(["AAAAAAAAAA"])
      );
    });
  });
});
