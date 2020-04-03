const uncommonFromSentences = require('./../main/uncommonFromSentences.js');
//    Question
//       We are given two sentences A and B.
//       (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
//       A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
//       Return a list of all uncommon words.
//       You may return the list in any order.

describe('引数の文字列は、スペースで区切られた単語である。各単語は小文字で構成されている。繰り返しの単語を取り除いた文字列のリストを返却する', () => {

    describe('uncommonFromSentences (string) A,(string) Bを実行するとき', () => {

        test('A = this apple is sweet, B = this apple is sour を入力して[sweet,sour]が返却されること', () => {
            expect(uncommonFromSentences('this apple is sweet', 'this apple is sour')).toEqual(expect.arrayContaining(['sweet', 'sour']));
        });

        test('A = apple apple, B = banana を入力して[banana]が返却されること', () => {
            expect(uncommonFromSentences('apple apple', 'banana')).toEqual(expect.arrayContaining(['banana']));
        });
    });
});