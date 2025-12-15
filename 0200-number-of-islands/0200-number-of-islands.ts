function numIslands(grid: string[][]): number {
    let answer = 0;
    const gridLen = grid.length;
    const gridRLen = grid[0].length;
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];

    const dfs = (i:number, j:number) => {
        grid[i][j] = '0';
        
        for(let x = 0; x < 4; x++){
            const nI = i + dir[x][0]
            const nY = j + dir[x][1];
            if(nI < gridLen && nY < gridRLen && nI >= 0 && nY >= 0 && grid[nI][nY] === '1') {
                dfs(nI, nY);
            }
        }
    }
    for(let i = 0; i < gridLen;i++) {
        for(let j = 0; j < gridRLen; j++) {
            if(grid[i][j] === '1') {
                dfs(i, j);
                answer+=1;
            }
        }
    }
    return answer;
};