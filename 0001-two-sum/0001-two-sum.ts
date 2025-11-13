function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const minusNum = target - num;
        if(map.has(minusNum)) {
            return [map.get(minusNum), i];
        } else {
            map.set(num, i);
        }
    }
};