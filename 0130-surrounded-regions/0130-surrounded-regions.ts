/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const dist = [[0,1],[1,0],[0,-1],[-1,0]];
    const n = board.length;
    const m = board[0].length;
    const dfs = (x,y) => {
        console.log('tracking', x,y)
        board[x][y] = 'C';
        for(let i = 0; i < 4; i++) {
            const nx = x + dist[i][0];
            const ny = y + dist[i][1];
            if(nx >= 1 && ny>=1 && nx < n-1 && ny < m-1 && board[nx][ny] === 'O') {
                dfs(nx, ny);
            }
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(i === 0 || i === n-1 || j === 0 || j === m-1) {
                console.log(i, j, 'i and j check')
                if(board[i][j] === 'O') dfs(i,j);
            }
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 'C') board[i][j] = 'O';
            else board[i][j] = 'X';
        }
    }
};