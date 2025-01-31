function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if(map.has(need)) return [map.get(need), i];
        map.set(nums[i], i);
    }
    const cur = target - nums[nums.length - 1];
    return [cur, nums.length - 1];
};