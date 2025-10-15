function permute(nums: number[]): number[][] {
    const answer = [];
    const set = new Set();

    const dfs = (arr: number[]) => {
        if(arr.length === nums.length) {
            answer.push([...arr]);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(!set.has(i)) {
                set.add(i);
                arr.push(nums[i]);
                dfs(arr);
                arr.pop(); 
                set.delete(i);
            }
        }
    }
    dfs([]);
    return answer;
};