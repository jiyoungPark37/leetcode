function removeDuplicates(nums: number[]): number {
    // 0,0,1,1,1,2,2,3,3,4
    // 0,1,0,1,1,2,2,3,3,4
    let prevIdx = 1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) continue;
        nums[prevIdx] = nums[i+1];
        prevIdx+=1;
    }
    return prevIdx-1;
};