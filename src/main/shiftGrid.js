/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
module.exports = (grid, k) => {
    const row = grid.length;
    const col = grid[0].length;
    
    if (k === 0 || row * col === k) {
        return grid;
    }
    
    const sr = Math.floor(k / col) % row;
    const sc = k % col;
    const data = JSON.parse(JSON.stringify(grid));

    for (let i = 0; i < row; ++i) {
        
        for (let j = 0; j < col; ++j) {
            let ni = i + sr, nj = j + sc;
            
            if (nj >= col) { 
                nj -= col; 
                ++ni; 
            }
            ni %= row;
            grid[ni][nj] = data[i][j];
        }
    }
    return grid;
};