function numIslands(grid: string[][]): number {
    let answer = 0;
    const dir = [[0,1],[1,0], [0,-1],[-1,0]];

    const traverse = (x: number, y:number) => {
        grid[x][y] = '0';

        for(let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];
            if(nx >= 0 && ny >=0 && nx < grid.length && ny < grid[0].length && grid[nx][ny] === '1') {
                traverse(nx, ny);
            }
        }
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                traverse(i,j);
                answer+=1;
            }
        }
    }
    return answer;
};