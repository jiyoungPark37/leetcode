function longestConsecutive(nums: number[]): number {
    if(nums.length === 0) return 0;
    nums.sort((a,b) => a - b);
    let max = 0;
    let count = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) continue;
        if(nums[i] + 1 === nums[i+1]) count++;
        else {
            max = Math.max(count, max);
            count = 1;
        }
    }
    return Math.max(count, max);
};