const getSum = require('./../main/getSum.js');
//      Question
//          Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

describe('引数の数字を加算と減算の演算子を使用せずに導出した結果を返却する', () => {

    describe('getSum(number a , number b) を実行するとき', () => {

        test('a = 1, b = 2 を入力して3が返却されること', () => {
            expect(getSum(1, 2)).toBe(3);
        });

        test('a = -2, b = 3 を入力して1が返却されること', () => {
            expect(getSum(-2, 3)).toBe(1);
        });

    });
});