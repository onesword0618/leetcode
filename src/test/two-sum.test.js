const twoSum = require('./../main/two-sum');

describe('第一引数の配列を加算、第二引数の値になったときの配列のインデックスを返却する', () => {

    test('numsの2と7を加算、戻り値が[0,1]になる', () => {
        nums = [2, 7, 11, 15];
        target = 9;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    test('numsの2と15を加算、戻り値が[0,3]になる', () => {
        nums = [2, 7, 11, 15];
        target = 17;
        expect(twoSum(nums, target)).toEqual([0, 3]);
    });

    test('numsの11と15を加算、戻り値が[2,3]になる', () => {
        nums = [2, 7, 11, 15];
        target = 26;
        expect(twoSum(nums, target)).toEqual([2, 3]);
    });

});