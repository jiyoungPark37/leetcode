function rob(nums: number[]): number {
    const arr = nums.slice();
    
    for(let i = 1; i < nums.length; i++) {
        arr[i] = Math.max(arr[i-1], (arr[i-2] ?? 0) + arr[i]);
    }
    return Math.max(...arr);
};