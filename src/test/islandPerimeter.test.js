const islandPerimeter = require('./../main/islandPerimeter.js');
//    Question
//       You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
//       Grid cells are connected horizontally/vertically (not diagonally).
//       The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
//       The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1.
//       The grid is rectangular, width and height don't exceed 100.
//       Determine the perimeter of the island.

describe('gridで定義した島の周囲の長さを返却する', () => {

    describe('islandPerimeter(number[][] grid)  を実行するとき', () => {
        test('grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]を引数に16が返却されること', () => {
            expect(islandPerimeter([
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0],
                [1, 1, 0, 0]
            ])).toBe(16);
        });
    });
});