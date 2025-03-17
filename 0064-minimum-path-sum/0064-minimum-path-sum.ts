function minPathSum(grid: number[][]): number {
    const board = Array.from(Array(grid.length), () => Array(grid[0].length).fill(1e9));
    board[0][0] = grid[0][0];
    const iLen = grid.length;
    const jLen = grid[0].length;

    for(let i = 0; i < iLen; i++) {
        for(let j = 0; j < jLen; j++) {
            if(i === 0 && j === 0) board[i][j] = grid[i][j];
            else if(i === 0) board[i][j] = grid[i][j] + board[i][j-1];
            else if(j === 0) board[i][j] = grid[i][j] + board[i-1][j];
            else {
                board[i][j]= Math.min(board[i-1][j], board[i][j-1]) + grid[i][j];
            }
        }
    }
    return board[iLen - 1][jLen - 1];
};