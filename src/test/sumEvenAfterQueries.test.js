const sumEvenAfterQueries = require('./../main/sumEvenAfterQueries.js');
//    Question
//      We have an array A of integers, and an array queries of queries.
//      For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index]
//      Then, the answer to the i-th query is the sum of the even values of A.
//      (Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)
//      Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

describe('第一引数の配列に対して第二引数の配列を要素から加算して偶数値を加算して返却する', () => {

    describe('sumEvenAfterQueries (number[] A, number[][] queries) を実行するとき', () => {

        test('A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]] を入力して[8,6,2,4]が返却されること', () => {
            expect(sumEvenAfterQueries([1, 2, 3, 4], [
                [1, 0],
                [-3, 1],
                [-4, 0],
                [2, 3]
            ])).toEqual(expect.arrayContaining([8, 6, 2, 4]));
        });
    });
});