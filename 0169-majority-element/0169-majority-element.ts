function majorityElement(nums: number[]): number {
    nums.sort((a,b) => a - b);
    const mid = Math.floor(nums.length / 2);
    return nums[mid];
};