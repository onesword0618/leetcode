const largestAltitude = require('./../main/largestAltitude.js');
//    Question
//      There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
//      You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

describe('標高が一番高いときの値を返却する', () => {

   describe('largestAltitude (number[] gain) を実行するとき', () => {

      test('gain = [-5,1,5,0,-7]を入力して1が返却されること', () => {
       expect(largestAltitude([-5,1,5,0,-7])).toBe(1);
      });

      test('gain = [-4,-3,-2,-1,4,3,2]を入力して0が返却されること', () => {
       expect(largestAltitude([-4,-3,-2,-1,4,3,2])).toBe(0);
      });
   });
});