const maximumUnits = require('./../main/maximumUnits.js');
//    Question
//    You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
//    numberOfBoxesi is the number of boxes of type i.
//    numberOfUnitsPerBoxi is the number of units in each box of the type i.
//    You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
//    Return the maximum total number of units that can be put on the truck.

describe('トラックの最大積載量について返却する', () => {
   describe('maximumUnits(number[] [] boxTypes number trackSize)  を実行するとき', () => {
      test('[[1,3],[2,2],[3,1]],4 を入力して8を返却すること', () => {
         expect(maximumUnits([[1,3],[2,2],[3,1]],4)).toBe(8);
      });

      test('[[5,10],[2,5],[4,7],[3,9]],10 を入力して91を返却すること', () => {
         expect(maximumUnits([[5,10],[2,5],[4,7],[3,9]],10)).toBe(91);
      });
   });
});