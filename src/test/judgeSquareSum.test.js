const judgeSquareSum = require('./../main/judgeSquareSum.js');
//    Question
//       Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.
describe('2乗した結果の加算式が入力値であるか判断して返却する', () => {
    describe('judgeSquareSum(number c)  を実行するとき', () => {
        test('c = 5を入力して真を返却すること', () => {
            expect(judgeSquareSum(5)).toBeTruthy();
        });

        test('c = 3を入力して偽を返却すること', () => {
            expect(judgeSquareSum(3)).toBeFalsy();
        });
    });
});