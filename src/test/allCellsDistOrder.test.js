const allCellsDistOrder = require('./../main/allCellsDistOrder');
//      Question
//       We are given a matrix with R rows and C columns has cells with integer coordinates (r, c),
//       where 0 <= r < R and 0 <= c < C.
//       Additionally, we are given a cell in that matrix with coordinates (r0, c0).
//       Return the coordinates of all cells in the matrix, sorted by their distance from (r0, c0) from smallest distance to largest distance.  Here, the distance between two cells (r1, c1) and (r2, c2) is the Manhattan distance, |r1 - r2| + |c1 - c2|.  (You may return the answer in any order that satisfies this condition.)

describe('引数の行列のセルに対してセル間の距離を返却する', () => {

 describe('allCellsDistOrder(number R, number C, number r0, number c0) を実行するとき', () => {

  test('R = 1, C = 2, r0 = 0, c0 = 0を入力して[[0,0],[0,1]]が返却されること', () => {
   expect(allCellsDistOrder(1,2,0,0)).toEqual(expect.arrayContaining([[0,0],[0,1]]));
  });

  test('R = 2, C = 2, r0 = 0, c0 = 1を入力して[[0,1],[0,0],[1,1],[1,0]]が返却されること', () => {
   expect(allCellsDistOrder(2,2,0,1)).toEqual(expect.arrayContaining([[0,1],[0,0],[1,1],[1,0]]));
  });

  test('R = 2, C = 3, r0 = 1, c0 = 2を入力して[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]が返却されること', () => {
   expect(allCellsDistOrder(2,3,0,0)).toEqual(expect.arrayContaining([[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]));
  });
 });
});