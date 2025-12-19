function exist(board: string[][], word: string): boolean {
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    const n = board.length;
    const m = board[0].length;
    let answer = false;

    const dfs = (x:number, y:number, idx:number) => {
        if(answer) return;
        if(idx >= word.length) {
            answer = true;
            return;
        }
        for(let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && board[nx][ny] === word[idx]) {
                board[nx][ny] = 'O';
                dfs(nx,ny, idx+1);
                board[nx][ny] = word[idx];
            }
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === word[0]) {
                board[i][j] = '0';
                dfs(i, j, 1);
                board[i][j] = word[0];
            }
        }
    }
    return answer;
};