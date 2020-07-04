const distributeCandies = require('./../main/distributeCandies2.js');
//    Question
//      We distribute some number of candies, to a row of n = num_people people in the following way:
//      We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.
//      Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person,
//      and so on until we give 2 * n candies to the last person.
//      This process repeats(with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.
//      The last person will receive all of our remaining candies(not necessarily one more than the previous gift).
//      Return an array(of length num_people and sum candies) that represents the final distribution of candies.

describe('ルールに従ってアメを配る配列を返却する', () => {

    describe('distributeCandies(number candies,number num_people)  を実行するとき', () => {
        test('candies = 7, num_people = 4を引数に[1,2,3,1]が返却されること', () => {
            expect(distributeCandies(7, 4)).toEqual(expect.arrayContaining([1, 2, 3, 1]));
        });

        test('candies = 10, num_people = 3を引数に[5,2,3]が返却されること', () => {
            expect(distributeCandies(10, 3)).toEqual(expect.arrayContaining([5, 2, 3]));
        });
    });
});