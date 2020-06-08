const isRectangleOverlap = require('./../main/isRectangleOverlap.js');
//    Question
//       A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.
//       Two rectangles overlap if the area of their intersection is positive.To be clear, two rectangles that only touch at the corner or edges do not overlap.
//       Given two(axis - aligned) rectangles, return whether they overlap.

describe('引数で配列の座標で作成した長方形が重なるかどうか判断して返却する', () => {

    describe('isRectangleOverlap(number[] rec1 , number[] rec2)  を実行するとき', () => {
        test(' rec1 = [0,0,2,2], rec2 = [1,1,3,3] を入力して真を返却すること', () => {
            expect(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])).toBeTruthy();
        });

        test(' rec1 = [0,0,1,1], rec2 = [1,0,2,1]を入力して真を返却すること', () => {
            expect(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])).toBeFalsy();
        });

    });
});