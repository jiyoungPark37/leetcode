function removeElement(nums: number[], val: number): number {
    let count = 0;
    let prevIdx = 0;
    for(const num of nums){
        if(num !== val) {
            nums[prevIdx] = num;
            prevIdx++;
            count++;
        }
    }
    return count;
};