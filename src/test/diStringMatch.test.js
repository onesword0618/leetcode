const diStringMatch = require('./../main/diStringMatch.js');
//   Question
//      Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
//      Return any permutation A of[0, 1, ..., N]such that for all i = 0, ..., N - 1:
//      If S[i] == "I", then A[i] < A[i + 1]
//      If S[i] == "D", then A[i] > A[i + 1]

describe('増加[I]と減少[D]のみを含む文字列をもとに順列を返却する', () => {

    describe('diStringMatch(String)が実行されたとき', () => {

        test('String = IDIDの場合、[0,4,1,3,2]が返却されること', () => {
            expect(diStringMatch('IDID')).toEqual(expect.arrayContaining([0, 4, 1, 3, 2]));
        });

        test('String = IIIの場合、[0,1,2,3]が返却されること', () => {
            expect(diStringMatch('III')).toEqual(expect.arrayContaining([0, 1, 2, 3]));
        });

        test('String = DDIの場合、[3,2,0,1]が返却されること', () => {
            expect(diStringMatch('DDI')).toEqual(expect.arrayContaining([3, 2, 0, 1]));
        });
    });
});