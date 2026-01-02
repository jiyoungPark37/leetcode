function minPathSum(grid: number[][]): number {
    const arr = grid.map(row => row.slice());
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            const left = i >= 1 ? arr[i-1][j] : Infinity;
            const top = j >= 1 ? arr[i][j-1] : Infinity;
            if(left === Infinity && top === Infinity) continue;
            arr[i][j] = Math.min(left,top) + arr[i][j];
        }
    }
    console.log(arr, 'arr')
    return arr[arr.length - 1][arr[0].length - 1];
};