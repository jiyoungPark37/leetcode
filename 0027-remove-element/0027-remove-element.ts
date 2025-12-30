function removeElement(nums: number[], val: number): number {
    let prevIdx = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[prevIdx] = nums[i];
            prevIdx++;
        }
    }
    return prevIdx;
};