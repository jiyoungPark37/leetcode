/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const n = board.length;
    const m = board[0].length;
    const checkBoard = (x:number, y:number) => {
        return x >= 0 && y>= 0 && x < n && y < m;
    }

    const dfs = (x: number, y: number) => {
        if(!checkBoard(x, y) || board[x][y] !== 'O') return;

        board[x][y] = 'A';
        dfs(x+1, y)
        dfs(x, y+1);
        dfs(x-1, y);
        dfs(x, y-1);
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(i === 0 || j === 0 || i === n - 1 || j === m-1) {
                dfs(i, j);
            }
        }
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 'A') board[i][j] = 'O';
            else board[i][j] = 'X';
        }
    }
};