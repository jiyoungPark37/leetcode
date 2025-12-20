function removeDuplicates(nums: number[]): number {
    // [0,1,0,1,1,2,2,3,3,4]
    // [0,1,1,1,1,2,2,3,3,4]
    let prevIdx = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[prevIdx-1]) {
            [nums[i], nums[prevIdx]] = [nums[prevIdx], nums[i]];
            prevIdx++;
        }
    }
    return prevIdx;
};