function subsets(nums: number[]): number[][] {
    const answer = [];

    const dfs = (arr:number[], idx: number) => {
        if(idx >= nums.length) {
            answer.push(arr.slice());
            return;
        }
        arr.push(nums[idx]);
        dfs(arr, idx + 1);
        arr.pop();
        dfs(arr, idx + 1);
    }
    dfs([], 0);
    return answer;
};