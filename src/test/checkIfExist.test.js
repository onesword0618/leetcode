const checkIfExist = require('./../main/checkIfExist');
//    Question
//    Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
//    More formally check if there exists two indices i and j such that :
//    i != j
//    0 <= i, j < arr.length
//    arr[i] == 2 * arr[j]

describe('配列の要素に2重にしたときの数が存在するかを判断して返却する', () => {

    describe('checkIfExist(number[] arr)  を実行するとき', () => {
        test('arr = [10,2,5,3]を入力して真を返却すること', () => {
            expect(checkIfExist([10, 2, 5, 3])).toBeTruthy();
        });

        test('arr = [7,1,14,11]を入力して真を返却すること', () => {
            expect(checkIfExist([7, 1, 14, 11])).toBeTruthy();
        });

        test('arr = [3,1,7,11]を入力して偽を返却すること', () => {
            expect(checkIfExist([3, 1, 7, 11])).toBeFalsy();
        });
    });
});