function maxSubArray(nums: number[]): number {
    let max = Math.max(...nums);
    const arr = nums.slice();

    for(let i = 0; i < arr.length; i++) {
        const curMax = i > 0 ? arr[i-1] : 0;
        arr[i] = Math.max(arr[i], arr[i] + curMax);
    }
    return Math.max(...arr);
};