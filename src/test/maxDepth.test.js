const maxDepth = require('./../main/maxDepth');
//   Question
//      A string is a valid parentheses string (denoted VPS) if it meets one of the following:
//      It is an empty string "", or a single character not equal to "(" or ")",
//      It can be written as AB (A concatenated with B), where A and B are VPS's, or
//      It can be written as (A), where A is a VPS.
//      We can similarly define the nesting depth depth(S) of any VPS S as follows:
//      depth("") = 0
//      depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's
//      depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
//      For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
//      Given a VPS represented as string s, return the nesting depth of s.

describe('渡した引数の文字列から括弧の最大ネスト数を返却する', () => {

    test('(1+(2*3)+((8)/4))+1の引数を渡して3が返却される', () => {
        expect(maxDepth('(1+(2*3)+((8)/4))+1')).toBe(3);
    });

    test('(1)+((2))+(((3)))の引数を渡して3が返却される', () => {
        expect(maxDepth('(1)+((2))+(((3)))')).toBe(3);
    });

    test('1+(2*3)/(2-1)の引数を渡して1が返却される', () => {
        expect(maxDepth('1+(2*3)/(2-1)')).toBe(1);
    });

    test('1の引数を渡して0が返却される', () => {
        expect(maxDepth('1')).toBe(0);
    });
});