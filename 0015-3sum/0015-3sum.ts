function threeSum(nums: number[]): number[][] {
    const answer = [];
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        // if the smallest value is bigger than 0, there is no chance that the sum is 0
        if(nums[i] > 0) break;

        let start = i + 1;
        let end = nums.length - 1;
        while(start<end) {
            const sum = nums[start] + nums[end] + nums[i];
            if(sum === 0) {
                 answer.push([nums[i], nums[start], nums[end]]);
                 while(nums[start] === nums[start+1] && start < end) start++;
                 while(start<end && nums[end] === nums[end - 1]) end--;
                start++;
                end--;
            } else {
                if(sum > 0) end-=1;
                else start+=1;
            }
        }
    }
    return answer;
};