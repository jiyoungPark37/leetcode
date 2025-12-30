function spiralOrder(matrix: number[][]): number[] {
    const n = matrix.length;
    const m = matrix[0].length;
    let colIdx = 0;
    let rowIdx = 0;
    let distIdx = 0;
    const dist = [[0,1],[1,0],[-1,0],[0,-1]];
    const answer = [];
    while(answer.length < m * n) {
        console.log(colIdx, rowIdx, 'check', answer, 'answer')
        if(matrix[colIdx][rowIdx] !== Infinity) {
            answer.push(matrix[colIdx][rowIdx]);
            matrix[colIdx][rowIdx] = Infinity;
        }

        const nC = colIdx + dist[distIdx][0];
        const nR = rowIdx + dist[distIdx][1];
        if(nC < 0 || nR < 0 || nC >= n || nR >= m || matrix[nC][nR] === Infinity) {
            distIdx = (distIdx+1)%4;
            continue;
        }
        colIdx = nC;
        rowIdx = nR;
    }
    return answer;
};