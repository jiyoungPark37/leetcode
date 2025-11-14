function sortedSquares(nums: number[]): number[] {
    return nums.map(ele => ele * ele).sort((a,b) => a - b);
};