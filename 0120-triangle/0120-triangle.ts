// 1. dfs
// const minimumTotalWithDfs = (triangle: number[][]): number => {
//     const col = triangle.length;

//     const dfs = (x: number, y: number, acc: number) => {
//         acc += triangle[x][y];
//         if(x === col - 1) return acc;

//         const left = dfs(x+1, y, acc);
//         const right = y+1 < triangle[x+1].length ? dfs(x+1, y+1, acc) : undefined;
//         if(right == undefined) return left;
//         return Math.min(left, right);
//     }
//     const answer = dfs(0,0,0);
//     return answer;
// }

// 2. bottom up DP
function minimumTotal(triangle: number[][]): number {
    const len = triangle.length;
    const dp = triangle[len - 1].slice();

    // start from the second last array because dp is the last array of triangle
    for(let i = len - 2; i >= 0; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            // only can access to j and j+1
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1]);
        }
    }
    return dp[0];
};