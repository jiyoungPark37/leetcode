/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const colArr = new Set();
    const rowArr = new Set();
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                colArr.add(i);
                rowArr.add(j);
            }
        }
    }
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(colArr.has(i) || rowArr.has(j)) matrix[i][j] = 0;
        }
    }
};