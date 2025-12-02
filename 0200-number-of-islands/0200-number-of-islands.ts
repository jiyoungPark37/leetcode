function numIslands(grid: string[][]): number {
    let answer = 0;
    const dir = [[0,1], [1,0], [0,-1],[-1,0]];
    const len = grid.length;
    const lenY = grid[0].length;

    const traverse = (i: number, j: number) => {
        grid[i][j] = '0';

        for(let k = 0; k < 4; k++) {
            const nI = dir[k][0] + i;
            const nJ = dir[k][1] + j;
            if(nI >= 0 && nJ >= 0 && nI < len && nJ < lenY && grid[nI][nJ] === '1') {
                traverse(nI, nJ);
            }
        }
    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                answer+=1;
                traverse(i, j);
            }
        }
    }
    return answer;
};