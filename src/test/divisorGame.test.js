const divisorGame = require('./../main/divisorGame');

describe('除算をして割り切れなくなったら負けのゲームを行う', () => {

    test('引数2を渡して、Aliceが勝利する(true)', () => {
        expect(divisorGame(2)).toBe(true);
    });

    test('引数3を渡して、Bobが勝利する(false)', () => {
        expect(divisorGame(3)).toBe(false);
    });
});