function containsDuplicate(nums: number[]): boolean {
    const set = new Set();
    nums.forEach(ele => set.add(ele));
    return set.size !== nums.length;
};