function productExceptSelf(nums: number[]): number[] {
    let prev = nums[0];
    const arr = Array(nums.length).fill(1);
    for(let i = 1; i < nums.length; i++) {
        arr[i] = prev;
        prev*=nums[i];
    }
    prev = nums[nums.length - 1];
    for(let i = nums.length - 2; i >= 0; i--) {
        arr[i] *= prev;
        prev*=nums[i];
    }
    return arr;
};