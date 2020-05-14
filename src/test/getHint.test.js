const getHint = require('./../main/getHint.js');
//      Question
//          You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is.
//          Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and
//          position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows").
//          Your friend will use successive guesses and hints to eventually derive the secret number.
//          Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows.
//          Please note that both secret number and friend's guess may contain duplicate digits.

describe('引数の文字列から推測値を返却する', () => {

    describe('getHint(string secret, string guess) を実行するとき', () => {

        test('secret = 1807, guess = 7810 を入力して1A3Bが返却されること', () => {
            expect(getHint('1807', '7810')).toBe('1A3B');
        });

        test('secret = 1123, guess = 0111 を入力して1A3Bが返却されること', () => {
            expect(getHint('1123', '0111')).toBe('1A1B');
        });

    });
});