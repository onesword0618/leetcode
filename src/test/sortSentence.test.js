const sortSentence = require('./../main/sortSentence');
//   Question
//      A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
//      Each word consists of lowercase and uppercase English letters.
//      A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
//      For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
//      Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

describe('単語を並び替えた文の結果を返却する', () => {
   describe('sortSentence (string s) を実行するとき', () => {
      test('s = is2 sentence4 This1 a3を入力して This is a sentence が返却されること', () => {
         expect(sortSentence(`is2 sentence4 This1 a3`)).toBe(`This is a sentence`);
      });

      test('s = Myself2 Me1 I4 and3を入力して Me Myself and I が返却されること', () => {
       expect(sortSentence(`Myself2 Me1 I4 and3`)).toBe(`Me Myself and I`);
    });
   });
});