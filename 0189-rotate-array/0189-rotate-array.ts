/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let count = k;
    while(count > 0) {
        nums.unshift(nums.pop());
        count--;
    }
};