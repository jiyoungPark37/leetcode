function jump(nums: number[]): number {
    let end = 0;
    let max = 0;
    let count = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max-1, nums[i]);
        if(end === i) {
            end = i + max;
            count++;
        }
    }
    return count;
};