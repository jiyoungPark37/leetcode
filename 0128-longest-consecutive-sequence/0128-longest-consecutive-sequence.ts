function longestConsecutive(nums: number[]): number {
    if(nums.length <= 1) return nums.length;
    nums.sort((a,b) => a - b);
    let count = 1;
    let max = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) continue;
        if(nums[i] === nums[i-1] + 1) count+=1;
        else {
            max = Math.max(max, count);
            count = 1;
        }
    }
    max = Math.max(max, count);
    return max;
};