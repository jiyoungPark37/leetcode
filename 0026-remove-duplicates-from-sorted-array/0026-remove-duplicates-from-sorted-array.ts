function removeDuplicates(nums: number[]): number {
    let prevIdx = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[prevIdx-1]) {
            nums[prevIdx] = nums[i];
            prevIdx++;
        }
    }
    return prevIdx;
};