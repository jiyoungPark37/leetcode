function removeElement(nums: number[], val: number): number {
    let prevIdx = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val) {
            continue;
        }
        [nums[i], nums[prevIdx]] = [nums[prevIdx], nums[i]];
        prevIdx += 1;;
    }
    return prevIdx;
};