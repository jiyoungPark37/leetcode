function updateMatrix(mat: number[][]): number[][] {
    const n = mat.length;
    const m = mat[0].length;
    const queue = [];
    const max = n * m;
    const arr = [...mat].map((row, rowIdx) => [...row].map((col, colIdx) => {
        if(col === 0) {
            queue.push([0, rowIdx, colIdx]);
            return col;
        }
        return max;
    }));
    
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    while(queue.length > 0) {
        const [dist, x, y] = queue.shift();
        for(let i = 0; i < 4; i++) {
            const nx = x+dir[i][0];
            const ny = y+dir[i][1];
            if(nx>=0&&ny>=0&&nx<n&&ny<m&&arr[nx][ny]!== 0 && arr[nx][ny] > dist+1) {
                arr[nx][ny] = Math.min(arr[nx][ny], dist+1);
                queue.push([dist+1, nx, ny]);
            }
        }
    }

    return arr;
};