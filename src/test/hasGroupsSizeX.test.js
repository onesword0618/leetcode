const hasGroupsSizeX = require('./../main/hasGroupsSizeX');
// Question
//     In a deck of cards, each card has an integer written on it.
//     Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
//     Each group has exactly X cards.
//     All the cards in each group have the same integer.

describe('引いたカードでグループ分けができる場合は真を返却する', () => {

    test('[1,2,3,4,4,3,2,1]は真であること', () => {
        expect(hasGroupsSizeX([1,2,3,4,4,3,2,1])).toBeTruthy();
    });

    test('[1,1,1,2,2,2,3,3]は偽であること', () => {
        expect(hasGroupsSizeX([1,1,1,2,2,2,3,3])).toBeFalsy();
    });

    test('[1]は偽であること', () => {
        expect(hasGroupsSizeX([1])).toBeFalsy();
    });

    test('[1,1]は真であること', () => {
        expect(hasGroupsSizeX([1,1])).toBeTruthy();
    });

    test('[1,1,2,2,2,2]は真であること', () => {
        expect(hasGroupsSizeX([1,1,2,2,2,2])).toBeTruthy();
    });
});