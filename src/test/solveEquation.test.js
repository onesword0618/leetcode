const solveEquation = require('./../main/solveEquation.js');
//    Question
//      Solve a given equation and return the value of x in the form of string "x=#value". The equation contains only '+', '-' operation, the variable x and its coefficient.
//      If there is no solution for the equation, return "No solution".
//      If there are infinite solutions for the equation, return "Infinite solutions".
//      If there is exactly one solution for the equation, we ensure that the value of x is an integer.

describe('方程式の結果を返却する', () => {

    describe('solveEquation(string equation) を実行するとき', () => {
        test('equation = x+5-3+x=6+x-2を引数にx=2が返却されること', () => {
            expect(solveEquation('x+5-3+x=6+x-2')).toBe('x=2');
        });

        test('equation = x=xを引数にInfinite solutionsが返却されること', () => {
            expect(solveEquation('x=x')).toBe('Infinite solutions');
        });

        test('equation = 2x=xを引数にx=0が返却されること', () => {
            expect(solveEquation('2x=x')).toBe('x=0');
        });

        test('equation = 2x+3x-6x=x+2を引数にx=-1が返却されること', () => {
            expect(solveEquation('2x+3x-6x=x+2')).toBe('x=-1');
        });
    });
});