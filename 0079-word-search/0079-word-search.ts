function exist(board: string[][], word: string): boolean {
    let answer = false;
    const hasVisited = '999';
    const dist = [[0,1],[1,0],[0,-1],[-1,0]];
    const n = board.length;
    const m = board[0].length;
    const dfs = (x,y, idx) => {
        if(answer) return;
        if(idx >= word.length) {
            answer = true;
            return;
        }
        for(let i = 0; i < 4; i++) {
            const nx = x + dist[i][0];
            const ny = y + dist[i][1];
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && board[nx][ny] === word[idx]) {
                board[nx][ny] = hasVisited;
                dfs(nx, ny, idx+1);
                board[nx][ny] = word[idx];
            }
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === word[0]) {
                board[i][j] = hasVisited;
                dfs(i, j, 1);
                board[i][j] = word[0];
            }
        }
    }
    return answer;
};