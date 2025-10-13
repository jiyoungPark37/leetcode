function singleNumber(nums: number[]): number {
    nums.sort((a,b) => a - b);
    const BEEN = -Infinity;
    
    let cur = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(cur === nums[i]) cur = BEEN;
        else {
            if(cur === BEEN) cur = nums[i];
        }
    }
    if(cur === BEEN) return nums[nums.length - 1];
    return cur;
};