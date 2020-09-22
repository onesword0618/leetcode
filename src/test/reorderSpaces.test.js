const reorderSpaces = require('./../main/reorderSpaces');
//   Question
//      You are given a string text of words that are placed among some number of spaces.
//      Each word consists of one or more lowercase English letters and are separated by at least one space.
//      It's guaranteed that text contains at least one word.
//      Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized.
//      If you cannot redistribute all the spaces equally, place the extra spaces at the end, 
//      meaning the returned string should be the same length as text.
//      Return the string after rearranging the spaces.

describe('渡した引数の文字列の空白を再配置して返却する', () => {

    test('  this   is  a sentence の引数を渡してthis   is   a   sentenceが返却される', () => {
        expect(reorderSpaces('  this   is  a sentence ')).toBe('this   is   a   sentence');
    });

    test(' practice   makes   perfectの引数を渡してpractice   makes   perfectが返却される', () => {
        expect(reorderSpaces(' practice   makes   perfect')).toBe('practice   makes   perfect ');
    });

    test('hello   worldの引数を渡してhello   worldが返却される', () => {
        expect(reorderSpaces('hello   world')).toBe('hello   world');
    });

    test('  walks  udp package   into  bar aの引数を渡してwalks  udp  package  into  bar  a が返却される', () => {
        expect(reorderSpaces('  walks  udp package   into  bar a')).toBe('walks  udp  package  into  bar  a ');
    });

    test('aの引数を渡してaが返却される', () => {
        expect(reorderSpaces('a')).toBe('a');
    });
});