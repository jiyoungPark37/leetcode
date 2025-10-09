function maxAreaOfIsland(grid: number[][]): number {
    let max = 0;
    const dir = [[-1,0],[0,1],[1,0],[0,-1]];

    const traverse = (x: number, y: number) => {
        if(grid[x][y] !== 1) return;
        let answer = 1;
        grid[x][y] = 0;

        for(let k = 0; k < 4; k++) {
            const nx = dir[k][0] + x;
            const ny = dir[k][1] + y;
            if(nx >= 0 && ny >= 0 && nx < grid.length && ny < grid[0].length && grid[nx][ny] === 1) {
                answer += traverse(nx, ny);
            }
        }
        return answer;
    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                const res = traverse(i, j);
                if(res > max) max = res;
            }
        }
    }
    return max;
};