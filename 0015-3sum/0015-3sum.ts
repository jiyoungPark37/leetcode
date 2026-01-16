function threeSum(nums: number[]): number[][] {
    const answer = [];
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] === nums[i-1]) continue;
        if(nums[i] > 0) break;
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            const sum = nums[left] + nums[right] + nums[i];
            if(sum === 0) {
                answer.push([nums[left] , nums[right] , nums[i]])
                while(left < right && nums[left] === nums[left+1]) left++;
                while(left<right && nums[right] === nums[right-1])right--;
                left++;
                right--;
            } else if(sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return answer;
};