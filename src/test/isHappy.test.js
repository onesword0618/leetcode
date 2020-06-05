const isHappy = require('./../main/isHappy.js');
//    Question
//       Write an algorithm to determine if a number n is "happy".
//       A happy number is a number defined by the following process: Starting with any positive integer,
//       replace the number by the sum of the squares of its digits, and repeat the process until the number
//       equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1.
//       Those numbers for which this process ends in 1 are happy numbers.
//       Return True if n is a happy number, and False if not.

describe('引数で渡した値を2乗の合計で置き換えて1で終了するかどうか判断して返却する', () => {

    describe('isHappy(number num)  を実行するとき', () => {
        test('num =19 を入力して真を返却すること', () => {
            expect(isHappy(19)).toBeTruthy();
        });
    });
});