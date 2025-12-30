function minSubArrayLen(target: number, nums: number[]): number {
    const totalSum = nums.reduce((sum, acc) => acc+sum, 0);
    if(totalSum < target) return 0;
    let answer = nums.length;
    let idx = 0;
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= target) return 1;
        sum+=nums[i];
        while(idx < i && target <= sum) {
            if(target <= sum && answer > i - idx + 1) answer = i - idx + 1;
            sum-=nums[idx];
            idx++;
        }
    }
    return answer;
};