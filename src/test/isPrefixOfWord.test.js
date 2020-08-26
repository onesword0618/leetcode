const isPrefixOfWord = require('./../main/isPrefixOfWord');

// Question
//    Given a sentence that consists of some words separated by a single space, and a searchWord.
//    You have to check if searchWord is a prefix of any word in sentence.
//    Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).
//    If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
//    A prefix of a string S is any leading contiguous substring of S.

describe('第一引数の文字列に対して第二引数の文字列が接頭辞として存在している数を返却する', () => {

    test('i love eating burger,burgを渡して4が返却される。', () => {
        expect(isPrefixOfWord('i love eating burger','burg')).toBe(4);
    });

    test('this problem is an easy problem,proを渡して2が返却される。', () => {
        expect(isPrefixOfWord('this problem is an easy problem','pro')).toBe(2);
    });

    test('i am tired,youを渡して-1が返却される。', () => {
        expect(isPrefixOfWord('i am tired','you')).toBe(-1);
    });

    test('i use triple pillow,pillを渡して4が返却される。', () => {
        expect(isPrefixOfWord('i use triple pillow','pill')).toBe(4);
    });

    test('hello from the other side,theyを渡して4が返却される。', () => {
        expect(isPrefixOfWord('hello from the other side','they')).toBe(-1);
    });

});