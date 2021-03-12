const rob2 = require('./../main/rob2');
//   Question
//    You are a professional robber planning to rob houses along a street.
//    Each house has a certain amount of money stashed.
//    All houses at this place are arranged in a circle.
//    That means the first house is the neighbor of the last one.
//    Meanwhile, adjacent houses have a security system connected,
//    and it will automatically contact the police
//    if two adjacent houses were broken into on the same night.
//    Given an integer array nums representing the amount of money of each house,
//    return the maximum amount of money you can rob tonight without alerting the police.

describe('あなたはプロの強盗として通りにある家を強盗する企画を立てている \n 家には一定量のお金が隠されており、唯一の制約は、隣接する家に同じ夜に強盗をしてはいけない ', () => {

    test('rob2 に[2,3,2]を渡した時、3が返却されるとき', () => {
        expect(rob2([2,3,2])).toBe(3);
    });

    test('rob2 に[1,2,3,1]を渡した時、4が返却されるとき', () => {
        expect(rob2([1,2,3,1])).toBe(4);
    });

    test('rob2 に[0]を渡した時、0が返却されるとき', () => {
        expect(rob2([0])).toBe(0);
    });
});