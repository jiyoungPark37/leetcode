/**
 Do not return anything, modify nums in-place instead.
 */
//  [0,1,0,3,12] // idx = 1;
// [1, 3,0,0,12] // idx = 2;
function moveZeroes(nums: number[]): void {
    let idx = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            idx++;
        }
    }
};