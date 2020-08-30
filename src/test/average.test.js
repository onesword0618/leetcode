const average = require('./../main/average');
//      Question
//          Given an array of unique integers salary where salary[i] is the salary of the employee i.
//          Return the average salary of employees excluding the minimum and maximum salary.

describe('配列の数字の平均を返却する', () => {

    describe('average(number[] salary) を実行するとき', () => {

        test('salary = [4000,3000,1000,2000] を入力して2500.00000が返却されること', () => {
            expect(average([4000,3000,1000,2000])).toBe(2500.00000);
        });

        test('salary = [1000,2000,3000] を入力して2000.00000が返却されること', () => {
            expect(average([1000,2000,3000])).toBe(2000.00000);
        });

        test('salary = [6000,5000,4000,3000,2000,1000] を入力して3500.00000が返却されること', () => {
            expect(average([6000,5000,4000,3000,2000,1000])).toBe(3500.00000);
        });

        test('salary = [8000,9000,2000,3000,6000,1000] を入力して4750.00000が返却されること', () => {
            expect(average([8000,9000,2000,3000,6000,1000])).toBe(4750.00000);
        });
    });
});