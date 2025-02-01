const VISITED = 9999999;

function spiralOrder(matrix: number[][]): number[] {
    const row = matrix[0].length;
    const col = matrix.length;
    const direction = [[0,1],[1,0],[0,-1], [-1,0]];

    let x = 0;
    let y = 0;
    let dirIdx = 0;
    let count = 1;
    const answer = [matrix[x][y]];
    matrix[x][y] = VISITED;

    while(count < row * col) {
        const nx = direction[dirIdx][0] + x;
        const ny = direction[dirIdx][1] + y;
        if(nx < 0 || ny < 0 || nx >= col || ny >= row || matrix[nx][ny] === VISITED) {
            dirIdx = (dirIdx + 1) % 4;
            continue;
        }
        count+=1;
        answer.push(matrix[nx][ny]);
        matrix[nx][ny] = VISITED;
        x = nx;
        y = ny;
    }

    return answer;
};