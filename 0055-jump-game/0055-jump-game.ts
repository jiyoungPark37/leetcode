function canJump(nums: number[]): boolean {
    let curMax = 0;
    for(let i = 0; i < nums.length; i++) {
        curMax = Math.max(curMax - 1, nums[i]);
        if(curMax <= 0 && i < nums.length - 1) return false;
    }
    return true;
};