function containsDuplicate(nums: number[]): boolean {
    const set = new Set();
    nums.forEach(ele => set.add(ele));
    return nums.length > set.size;
};