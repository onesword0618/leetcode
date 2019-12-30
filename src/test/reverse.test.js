const reverse = require('./../main/reverse');

describe('与えられた値を反転する', () => {

    test('123を321へ反転する', () => {
        expect(reverse(123)).toStrictEqual(321);
    });

    test('-123を-321へ反転する', () => {
        expect(reverse(-123)).toStrictEqual(-321);
    });

    test('120を21へ反転する',() => {
        expect(reverse(120)).toStrictEqual(21);
    });
});