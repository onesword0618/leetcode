const largeGroupPositions = require('./../main/largeGroupPositions.js');
//    Question
//    In a string S of lowercase letters, these letters form consecutive groups of the same character.
//    For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".
//    Call a group large if it has 3 or more characters.We would like the starting and ending positions of every large group.

describe('引数の文字列から連続した文字列のグループの開始位置と終了位置を返却する', () => {

    describe('largeGroupPositions(string S)  を実行するとき', () => {

        test('S =abbxxxxzzyを引数に[[3,6]]が返却されること', () => {
            expect(largeGroupPositions('abbxxxxzzy')).toEqual(expect.arrayContaining([[3, 6]]));
        });

        test('S =abcを引数に[]が返却されること', () => {
            expect(largeGroupPositions('abc')).toEqual(expect.arrayContaining([]));
        });

        test('S =abcdddeeeeaabbbcdを引数に[[3,5],[6,9],[12,14]]が返却されること', () => {
            expect(largeGroupPositions('abcdddeeeeaabbbcd')).toEqual(expect.arrayContaining([[3, 5], [6, 9], [12, 14]]));
        });
    });
});