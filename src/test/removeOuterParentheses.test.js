const removeOuterParentheses = require('./../main/removeOuterParentheses.js');
//    Question
//       A valid parentheses string is either empty(""), "(" + A + ")", or A + B, where A and B are valid parentheses strings,
//       and + represents string concatenation.For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
//       A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A + B, with A and B nonempty valid parentheses strings.
//       Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
//       Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

describe('与えられた括弧の文字列の外側を削除して返却する', () => {

    describe('removeOuterParentheses(string) が実行されるとき', () => {

        test('string=(()())(())を入力して()()()が返却されること', () => {
            expect(removeOuterParentheses('(()())(())')).toBe('()()()');
        });

        test('string=(()())(())(()(()))を入力して()()()()(())が返却されること', () => {
            expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
        });

        test('string=()()を入力して""が返却されること', () => {
            expect(removeOuterParentheses('()()')).toBe('');
        });
    });
});