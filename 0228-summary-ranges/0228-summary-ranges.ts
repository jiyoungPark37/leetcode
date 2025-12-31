function summaryRanges(nums: number[]): string[] {
    if(nums.length === 0) return [];
    const change = (a,b) => {
        if(a === b || b === undefined) return `${a}`;
        return `${a}->${b}`;
    }
    const answer = [];
    let prev = nums[0];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] + 1 < nums[i+1]) {
            answer.push(change(prev, nums[i]));
            prev = nums[i+1];
        }
    }
    answer.push(change(prev, nums[nums.length - 1]))
    return answer;
};