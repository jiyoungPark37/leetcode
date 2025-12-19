function orangesRotting(grid: number[][]): number {
    const n = grid.length;
    const m = grid[0].length;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    const queue = [];

    let answer = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] === 2) queue.push([i, j]);
        }
    }
    while(queue.length > 0) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const [a,b] = queue.shift();
            grid[a][b] = -1;

            for(let i = 0; i < 4; i++) {
                const nx = a + dir[i][0];
                const ny = b + dir[i][1];
                if(nx>=0 && ny >= 0 &&  nx < n && ny < m && grid[nx][ny] === 1) {
                    queue.push([nx, ny]);
                }
            }
        }
        answer+=1;
    }
    if(grid.some(row => row.some(ele => ele === 1))) return -1;
    return answer > 0 ? answer - 1 : answer;
};