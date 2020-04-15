const canThreePartsEqualSum = require('./../main/canThreePartsEqualSum.js');
//      Question
//        Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.
//        Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

describe('引数の配列の合計が3つの部分が等しいかかどうかを判定して返却する', () => {

    describe('canThreePartsEqualSum(number[] A) を実行するとき', () => {

        test('number[] = [0,2,1,-6,6,-7,9,1,2,0,1]を入力して真が返却すること', () => {
            expect(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toBeTruthy();
        });

        test('number[] = [0,2,1,-6,6,7,9,-1,2,0,1]を入力して偽が返却すること', () => {
            expect(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toBeFalsy();
        });
    });
});