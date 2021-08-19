const pacificAtlantic = require("./../main/pacificAtlantic");
//      Question
//           Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent,
//           the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.
//           Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
//           Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean. touches the right and bottom edges.
//           Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
//           Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

describe("引数の配列を大変異様と大西洋の水の流れに見立てたときの両方に流れることができるときの配列を返却する", () => {
  describe("pacificAtlantic(string[] words) を実行するとき", () => {
    test('words = ["mass","as","hero","superhero"]を入力して["as","hero"]が返却されること', () => {
      expect(
        pacificAtlantic([
          [1, 2, 2, 3, 5],
          [3, 2, 3, 4, 4],
          [2, 4, 5, 3, 1],
          [6, 7, 1, 4, 5],
          [5, 1, 1, 2, 4],
        ])
      ).toEqual(
        expect.arrayContaining([
          [0, 4],
          [1, 3],
          [1, 4],
          [2, 2],
          [3, 0],
          [3, 1],
          [4, 0],
        ])
      );
    });
  });
});
