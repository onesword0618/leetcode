const sortString = require('./../main/sortString.js');
//   Question
//      Given a string s.You should re - order the string using the following algorithm:
//      1. Pick the smallest character from s and append it to the result.
//      2. Pick the smallest character from s which is greater than the last appended character to the result and append it.
//      3. Repeat step 2 until you cannot pick more characters.
//      4. Pick the largest character from s and append it to the result.
//      5. Pick the largest character from s which is smaller than the last appended character to the result and append it.
//      6. Repeat step 5 until you cannot pick more characters.
//      7. Repeat the steps from 1 to 6 until you pick all characters from s.
//      In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
//      Return the result string after sorting s with this algorithm.

describe('引数の文字列をアルゴリズムをもとにソートした結果の文字列を返却する', () => {

    describe('sortString(String)が実行されたとき', () => {

        test('String = aaaabbbbccccの場合、abccbaabccbaが返却されること', () => {
            expect(sortString('aaaabbbbcccc')).toBe('abccbaabccba');
        });

        test('String = ratの場合、artが返却されること', () => {
            expect(sortString('rat')).toBe('art');
        });

        test('String = leetcodeの場合、cdeloteeが返却されること', () => {
            expect(sortString('leetcode')).toBe('cdelotee');
        });

        test('String = gggggggの場合、gggggggが返却されること', () => {
            expect(sortString('ggggggg')).toBe('ggggggg');
        });

        test('String = spoの場合、opsが返却されること', () => {
            expect(sortString('spo')).toBe('ops');
        });
    });
});