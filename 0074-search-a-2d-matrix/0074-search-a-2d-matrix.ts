function searchMatrix(matrix: number[][], target: number): boolean {
    const n = matrix.length;
    const m = matrix[0].length;
    if(n === 1 && m === 1) return matrix[0][0] === target;
    let left = 0;
    let right = n - 1;
    while(left<=right) {
        const mid = Math.floor((left+right)/2);
        if(matrix[mid][0] > target) right = mid - 1;
        else if(matrix[mid][m-1] < target) left = mid + 1;
        else {
            let rowLeft = 0;
            let rowRight = m - 1;
            while(rowLeft<=rowRight) {
                const rowMid = Math.floor((rowLeft+rowRight)/2);
                if(matrix[mid][rowMid] === target) return true;
                if(matrix[mid][rowMid] > target) rowRight = rowMid - 1;
                else rowLeft = rowMid + 1;
            }
            return false;
        } 
    }
    return false;
};