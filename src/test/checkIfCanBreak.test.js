const checkIfCanBreak = require('./../main/checkIfCanBreak.js');
//      Question
//           Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.
//           A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

describe('第一引数の文字列と第二引数の文字列を比較してを壊れないかどうかの判定を返却する', () => {
    describe('checkIfCanBreak(string s) を実行するとき', () => {
        test('s1 = abc, s2 = xyaを入力して真が返却されること', () => {
           expect(checkIfCanBreak(`abc`,`xya`)).toBeTruthy();
        });

        test('s1 = abe, s2 = acdを入力して偽が返却されること', () => {
           expect(checkIfCanBreak(`abe`,`acd`)).toBeFalsy();
        });

        test('s1 = leetcode, s2 = interviewを入力して真が返却されること', () => {
           expect(checkIfCanBreak(`leetcode`,`interview`)).toBeTruthy();
        });
    });
});