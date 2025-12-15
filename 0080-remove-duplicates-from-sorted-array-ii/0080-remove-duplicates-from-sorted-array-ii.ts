function removeDuplicates(nums: number[]): number {
    let prev = 2;
    for(let i = 2; i < nums.length; i++) {
        if(nums[i] !== nums[prev-2]) {
            nums[prev] = nums[i];
            prev++;
        }
    }
    return prev;
};