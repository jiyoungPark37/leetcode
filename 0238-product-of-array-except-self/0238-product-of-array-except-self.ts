function productExceptSelf(nums: number[]): number[] {
    let curAcc = nums[0];
    const arr = Array(nums.length).fill(1);

    for(let i = 1; i < arr.length; i++) {
        arr[i] *= curAcc;
        curAcc *= nums[i];
    }

    curAcc = nums[nums.length - 1];
    for(let i = arr.length - 2; i >= 0; i--) {
        arr[i] *= curAcc;
        curAcc *= nums[i];
    }

    return arr;
};