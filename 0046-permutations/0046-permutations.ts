function permute(nums: number[]): number[][] {
    const check = Array(nums.length).fill(0);
    const answer = [];
    const dfs = (cur) => {
        if(cur.length === nums.length) {
            answer.push(cur.slice());
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(check[i] === 0) {
                check[i] = 1;
                dfs([...cur, nums[i]]);
                check[i] = 0;
            }
        }
    }
    dfs([]);
    return answer;
};