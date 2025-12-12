function maxAreaOfIsland(grid: number[][]): number {
    let answer = 0;
    let count = 0;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];

    const dfs = (x:number, y:number) => {
        if(grid[x][y] !== 1) return;
        grid[x][y]=0;
        count++;
        for(let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];
            if(nx >= 0 && ny >= 0 && nx < grid.length && ny <= grid[0].length && grid[nx][ny] === 1) {
                dfs(nx, ny);
            }
        }
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                dfs(i,j);
                answer = Math.max(answer, count);
                count = 0;
            }
        }
    }
    return answer;
};