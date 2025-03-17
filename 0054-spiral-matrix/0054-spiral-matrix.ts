const hasVisited = -999;
function spiralOrder(matrix: number[][]): number[] {
    const maxX = matrix.length;
    const maxY = matrix[0].length;
    const answer = [matrix[0][0]];
    matrix[0][0] = hasVisited;

    let count = 1;
    let x = 0;
    let y = 0;
    let index = 0;
    const dir = [[0,1],[1,0],[0,-1], [-1, 0]];

    while(count < maxX * maxY) {
        const nx = x + dir[index][0];
        const ny = y + dir[index][1];
        if(nx >= maxX || ny >= maxY || nx < 0 || ny < 0 || matrix[nx][ny] === hasVisited) {
            index = (index+1)%4;
            continue;
        }
        answer.push(matrix[nx][ny]);
        matrix[x][y] = hasVisited;
        x = nx;
        y = ny;
        count+=1;
    }
    return answer;
};