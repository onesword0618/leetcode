const runningSum = require('./../main/runningSum');
//   Question
//      Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

describe('引数の配列要素ごとに加算した配列を返却する', () => {

    test('[1,2,3,4]の引数を渡して[1,3,6,10]が返却される', () => {
        expect(runningSum([1, 2, 3, 4]))
            .toEqual(expect.arrayContaining([1, 3, 6, 10]));
    });

    test('[1,1,1,1,1]の引数を渡して[1,2,3,4,5]が返却される', () => {
        expect(runningSum([1, 1, 1, 1, 1]))
            .toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
    });

    test('[3,1,2,10,1]の引数を渡して[3,4,6,16,17]が返却される', () => {
        expect(runningSum([3, 1, 2, 10, 1]))
            .toEqual(expect.arrayContaining([3, 4, 6, 16, 17]));
    });
});