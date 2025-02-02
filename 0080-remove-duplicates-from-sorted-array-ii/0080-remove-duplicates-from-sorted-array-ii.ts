function removeDuplicates(nums: number[]): number {
    let prevNum = nums[0];
    let prevCount = 0;
    let unique = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === prevNum && prevCount < 2 || nums[i] !== prevNum) {
            nums[unique] = nums[i];
            unique++;
            if(nums[i] === prevNum) prevCount+=1;
            else {
                prevCount = 1;
                prevNum = nums[i];
            }
        }
    }
    return unique;
};