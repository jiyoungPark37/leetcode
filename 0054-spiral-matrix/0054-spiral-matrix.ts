function spiralOrder(matrix: number[][]): number[] {
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    let idx = 0;
    let x = 0;
    let y = 0;
    let count = 0;
    const n = matrix.length;
    const m = matrix[0].length;
    const hasVisited = 999;
    const answer = [];

    while(count < n * m) {
        console.log(x,y)
        if(matrix[x][y] !== hasVisited) {
            answer.push(matrix[x][y]);
            matrix[x][y] = hasVisited;
            count++;
        }

        const nx = x + dir[idx][0];
        const ny = y + dir[idx][1];
        if(nx >= 0 && ny >= 0 && nx < n && ny < m && matrix[nx][ny] !== hasVisited) {
            x = nx;
            y = ny;
        } else idx = (idx+1) % 4;
    }
    return answer;
};