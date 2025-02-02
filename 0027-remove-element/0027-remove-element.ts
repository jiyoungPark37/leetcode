function removeElement(nums: number[], val: number): number {
    let unmatch = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[unmatch] = nums[i];
            unmatch+=1;
        }
    }
    return unmatch;
};