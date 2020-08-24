const finalPrices = require('./../main/finalPrices');
//     Question
//        Given the array prices where prices[i] is the price of the ith item in a shop.
//        There is a special discount for items in the shop, if you buy the ith item,
//        then you will receive a discount equivalent to prices[j] 
//        where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.
//        Return an array where the ith element is the final price you will pay 
//        for the ith item of the shop considering the special discount.

describe('特別割引を考慮した最終的な価格の配列を返却する', () => {

    test('[8,4,6,2,3]の引数を渡して[4,2,4,2,3]が返却される', () => {
        expect(finalPrices([8,4,6,2,3]))
            .toEqual(expect.arrayContaining([4, 2, 4, 2,3]));
    });

    test('[1,2,3,4,5]の引数を渡して[1,2,3,4,5]が返却される', () => {
        expect(finalPrices([1,2,3,4,5]))
            .toEqual(expect.arrayContaining([1,2,3,4,5]));
    });

    test('[10,1,1,6]の引数を渡して [9,0,1,6]が返却される', () => {
        expect(finalPrices([10,1,1,6]))
            .toEqual(expect.arrayContaining([9,0,1,6]));
    });
});