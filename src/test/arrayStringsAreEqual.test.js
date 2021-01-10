const arrayStringsAreEqual = require('./../main/arrayStringsAreEqual');
//      Question
//        Given two string arrays word1 and word2,
//        return true if the two arrays represent the same string, and false otherwise.
//        A string is represented by an array
//        if the array elements concatenated in order forms the string.

describe('2つの文字列の配列が同等かどうかを確認した結果を返却する', () => {

    describe('arrayStringsAreEqual(string[] word1, string[] word2) を実行するとき', () => {

     test('word1 = [ab,c], word2 = [a,bc] を入力してtrueが返却されること', () => {
      expect(arrayStringsAreEqual(['ab','c'],['a','bc'])).toBeTruthy();
     });

     test('word1 = [a,cb], word2 = [ab,cb] を入力してfalseが返却されること', () => {
      expect(arrayStringsAreEqual(['a','cb'],['ab','cb'])).toBeFalsy();
     });

     test('word1 = [abc,d,defg], word2 = [abcddefg] を入力してtrueが返却されること', () => {
      expect(arrayStringsAreEqual(['abc','d','defg'],['abcddefg'])).toBeTruthy();
     });
    });
});