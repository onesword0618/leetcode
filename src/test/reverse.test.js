const reverse = require('./../main/reverse');

describe('与えられた値が反転して返却される', () => {

    test('123が321へ反転する', () => {
        expect(reverse(123)).toEqual(321);
    });

    test('-123が-321へ反転する', () => {
        expect(reverse(-123)).toEqual(-321);
    });

    test('120が21へ反転する',() => {
        expect(reverse(120)).toEqual(21);
    });
});