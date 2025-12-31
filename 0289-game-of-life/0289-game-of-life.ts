/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const dist = [[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,-1],[1,-1],[-1,1]];
    const n = board.length;
    const m = board[0].length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            let live = 0;
            for(let k = 0; k < 8; k++) {
                const nI = i + dist[k][0];
                const nJ = j + dist[k][1];
                if(nI >= 0 && nJ >= 0 && nI < n && nJ < m) {
                    const neighbor = board[nI][nJ];
                    if(neighbor === 1 || neighbor === 2) live++;
                }
            }
            if(board[i][j] === 0) {
                if(live === 3) board[i][j] = 3;
            } else {
                if(live < 2 || live > 3) board[i][j] = 2;
            }
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 2) board[i][j] = 0;
            else if(board[i][j] === 3) board[i][j] = 1;
        }
    }
};