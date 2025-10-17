function jump(nums: number[]): number {
    let maxDiff = 0;
    let count = 0;
    let curPos = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        maxDiff = Math.max(maxDiff, i + nums[i]);
        if(i === curPos) {
            curPos = maxDiff;
            count++;
        }
    }
    return count;
};