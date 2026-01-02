function minSubArrayLen(target: number, nums: number[]): number {
    let size = Infinity;
    let sum = 0;
    let left = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= target) return 1;
        sum+=nums[i];
        while(sum >= target && left < i) {
            size = Math.min(size, i - left + 1);
            sum-=nums[left];
            left++;
        }
    }
    return size === Infinity ? 0 : size;
};