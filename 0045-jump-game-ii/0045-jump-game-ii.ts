function jump(nums: number[]): number {
    let max = 0;
    let count = 0;
    let end = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if(end === i) {
            end = max;
            count++;
        }
    }
    return count;
};