const uniqueMorseRepresentations = require('./../main/uniqueMorseRepresentations.js');
//      Question
//          International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes,
//          as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
//          For convenience, the full table for the 26 letters of the English alphabet is given below:
//          [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
//          Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-").
//          We'll call such a concatenation, the transformation of a word.
//          Return the number of different transformations among all words we have.

describe('変換を行うモールス符号語の数を返却する', () => {

    describe('uniqueMorseRepresentations(string[] words) を実行するとき', () => {

        test('words = [gin, zen, gig, msg] を入力して2が返却されること', () => {
            expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2);
        });
    });
});