function canJump(nums: number[]): boolean {
    if(nums.length <= 1) return true;
    let max = nums[0];
    for(let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max-1, nums[i]);
        if(max === 0) return false;
    }
    return true;
};