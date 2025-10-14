function subsets(nums: number[]): number[][] {
    const answer = [];
    const dfs = (arr: number[], start: number) => {
        if(start >= nums.length) {
            answer.push(arr.slice());
            return;
        }
        arr.push(nums[start]);
        dfs(arr, start + 1);
        arr.pop();
        dfs(arr, start + 1);
    };
    dfs([], 0);
    return answer;
};