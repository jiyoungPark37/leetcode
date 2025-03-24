function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const total = target - nums[i];
        if(map.has(total)) return [map.get(total), i];
        map.set(nums[i], i);
    }
};