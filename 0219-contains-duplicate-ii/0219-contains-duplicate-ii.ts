function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(map.has(num)) {
            if(map.get(num) + k >= i) return true;
            map.set(num, i);
        } else {
            map.set(num, i);
        }
    }
    return false;
};