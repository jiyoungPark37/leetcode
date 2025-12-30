function removeDuplicates(nums: number[]): number {
    let prevIdx = 2;
    for(let i = 2; i < nums.length; i++) {
        if(nums[i] !== nums[prevIdx - 2]) {
            nums[prevIdx] = nums[i];
            prevIdx++;
        }
    }
    return prevIdx;
};