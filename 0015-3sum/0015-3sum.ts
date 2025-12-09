function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a - b);
    const answer = [];
    const set = new Set();

    for(let i = 0; i < nums.length - 2; i++) {
        if(set.has(nums[i])) continue;

        set.add(nums[i]);
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            const sum = nums[left] + nums[right] + nums[i];
            if(sum === 0) {
                answer.push([nums[i], nums[left], nums[right]]);
                left+=1;
                while(left < right && nums[left] === nums[left-1]) left++;
            } else if(sum > 0) right--;
            else left++;
        }
    }
    return answer;
};