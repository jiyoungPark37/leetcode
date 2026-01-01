function maxSubArray(nums: number[]): number {
    const arr = nums.slice();
    for(let i =1; i < nums.length; i++) {
        arr[i] = Math.max(arr[i], arr[i-1]+arr[i]);
    }
    return Math.max(...arr);
};