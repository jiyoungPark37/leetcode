function numIslands(grid: string[][]): number {
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    const n = grid.length;
    const m = grid[0].length;

    const dfs = (x,y) => {
        grid[x][y] = '0';
        for(let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];
            if(nx >=0 && ny>=0 && nx<n && ny < m && grid[nx][ny] === '1'){
                dfs(nx, ny);
            }
        }
    }
    let count = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] === '1') {
                dfs(i, j);
                count+=1;
            }
        }
    }
    return count;
};