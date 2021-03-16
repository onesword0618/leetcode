const computeArea = require('./../main/computeArea');
//    Question
//     Find the total area covered by two rectilinear rectangles in a 2D plane.
//     Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

describe('2つの図形が重なっている総面積を返却する', () => {
    describe('computeArea(number A, number B, number C, number D, number E, number F, number G, number H)', () => {
        test('A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2を入力して45が返却されていること', () => {
            expect(computeArea(-3,0,3,4,0,-1,9,2)).toBe(45);
        });
    });
});