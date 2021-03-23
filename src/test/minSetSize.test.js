const minSetSize = require('./../main/minSetSize');
//   Question
//      Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.
//      Return the minimum size of the set so that at least half of the integers of the array are removed.

describe('配列の大きさを半分減らしてを返却する', () => {

    test('[3,3,3,3,5,5,5,2,2,7]の引数を渡して2が返却される', () => {
        expect(minSetSize([3,3,3,3,5,5,5,2,2,7])).toBe(2);
    });

    test('[7,7,7,7,7,7]の引数を渡して1が返却される', () => {
        expect(minSetSize([7,7,7,7,7,7])).toBe(1);
    });

    test('[1,9]の引数を渡して1が返却される', () => {
       expect(minSetSize([1, 9])).toBe(1);
    });

    test('[1000,1000,3,7]の引数を渡して1が返却される', () => {
       expect(minSetSize([1000,1000,3,7])).toBe(1);
    });

    test('[1,2,3,4,5,6,7,8,9,10]の引数を渡して5が返却される', () => {
       expect(minSetSize([1,2,3,4,5,6,7,8,9,10])).toBe(5);
    });
});