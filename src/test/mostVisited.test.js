const mostVisited = require('./../main/mostVisited');
//   Question
//      Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//      Return the array in the form [x1,y1,x2,y2,...,xn,yn].
//      Given an integer n and an integer array rounds.
//      We have a circular track which consists of n sectors labeled from 1 to n. 
//      A marathon will be held on this track, the marathon consists of m rounds. 
//      The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. 
//      For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]
//      Return an array of the most visited sectors sorted in ascending order.
//      Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).

describe('最もアクセスされたセクターの配列を昇順に並び替えた配列を返却する', () => {

    test('4,[1,3,1,2]の引数を渡して[1,2]が返却される', () => {
        expect(mostVisited(4, [1, 3, 1, 2]))
            .toEqual(expect.arrayContaining([1, 2]));
    });

    test('2,[2,1,2,1,2,1,2,1,2]の引数を渡して[2]が返却される', () => {
        expect(mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2]))
            .toEqual(expect.arrayContaining([2]));
    });

    test('7,[1,3,5,7]の引数を渡して[1,2,3,4,5,6,7]が返却される', () => {
        expect(mostVisited(7, [1, 3, 5, 7]))
            .toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7]));
    });


});