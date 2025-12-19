function permute(nums: number[]): number[][] {
    const answer = [];
    const check = Array(nums.length).fill(0);

    const dfs = (arr: number[]) => {
        if(arr.length === nums.length) {
            answer.push(arr.slice());
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(check[i] === 1) continue;

            check[i] = 1;
            arr.push(nums[i]);
            dfs(arr);
            arr.pop();
            check[i] = 0;
        }
    }
    dfs([]);
    return answer;
};