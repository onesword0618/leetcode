const twoSum = require('./../main/two-sum');

describe('第二引数の数値になるように第一引数の数値を合計する', () => {

    test('numsの2と7で戻り値が[0,1]になる', () => {
        nums = [2, 7, 11, 15];
        target = 9;
        expect(twoSum(nums, target)).toStrictEqual([0, 1]);
    });

    test('numsの2と15で戻り値が[0,3]になる', () => {
        nums = [2, 7, 11, 15];
        target = 17;
        expect(twoSum(nums, target)).toStrictEqual([0, 3]);
    });

    test('numsの11と15で戻り値が[2,3]になる', () => {
        nums = [2, 7, 11, 15];
        target = 26;
        expect(twoSum(nums, target)).toStrictEqual([2, 3]);
    });

});