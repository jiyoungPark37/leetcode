function removeDuplicates(nums: number[]): number {
    let prevIdx = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const next = nums[i+1];
        if(cur !== next) {
            nums[prevIdx] = nums[i];
            prevIdx++;
            count++;
        }
    }
    return count;
};