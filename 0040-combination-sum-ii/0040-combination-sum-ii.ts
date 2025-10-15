function combinationSum2(candidates: number[], target: number): number[][] {
    const answer = [];
    candidates.sort();

    const dfs = (arr: number[], i: number, sum: number) => {
        if(sum === target) {
            answer.push(arr.slice());
            return;
        }
        if(i >= candidates.length || sum > target) return;

        arr.push(candidates[i]);
        dfs(arr, i+1, sum + candidates[i]);
        arr.pop();

        while(i+1 < candidates.length && candidates[i] === candidates[i+1]) i+=1;
        dfs(arr, i+1, sum);
    };

    dfs([], 0, 0);
    return answer;
};