const containsNearbyAlmostDuplicate = require('./../main/containsNearbyAlmostDuplicate');
//    Question
//     Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

describe('配列の要素に重複しているかを判断して返却する', () => {

    describe('containsNearbyAlmostDuplicate(number[] nums, number k, number t)  を実行するとき', () => {
        test('nums = [1,2,3,1], k = 3, t = 0を入力して真を返却すること', () => {
            expect(containsNearbyAlmostDuplicate([1,2,3,1],3,0)).toBeTruthy();
        });

        test('nums = [1,0,1,1], k = 1, t = 2を入力して真を返却すること', () => {
         expect(containsNearbyAlmostDuplicate([1,0,1,1],1,2)).toBeTruthy();
        });

        test('nums = [1,5,9,1,5,9], k = 2, t = 3を入力して偽を返却すること', () => {
         expect(containsNearbyAlmostDuplicate([1,5,9,1,5,9],2,3)).toBeFalsy();
        });
    });
});