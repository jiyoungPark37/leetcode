function productExceptSelf(nums: number[]): number[] {
    const arr = Array(nums.length).fill(1);

    let prev = 1;
    for(let i = 0; i < nums.length; i++) {
        arr[i] = prev;
        prev*=nums[i];
    }
    prev = nums[nums.length - 1];
    for(let i = nums.length - 2; i >= 0; i--) {
        arr[i] = prev * arr[i];
        prev *= nums[i];
    }
    return arr;
};