/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports = grid => {
    let perimeter = 0;

    const checkSides = (grid, i, j) => {
        if (!grid[i - 1] || (grid[i - 1] && !grid[i - 1][j])) {
            perimeter++; // top
        };

        if (!grid[i + 1] || (grid[i + 1] && !grid[i + 1][j])) {
            perimeter++; // bottom
        };

        if (!grid[i][j - 1]) {
            perimeter++; // left
        };

        if (!grid[i][j + 1]) {
            perimeter++; // right
        };
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                checkSides(grid, i, j);
            };
        };
    };
    return perimeter;
};