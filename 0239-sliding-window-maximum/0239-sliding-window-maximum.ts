function maxSlidingWindow(nums: number[], k: number): number[] {
    const max = [];
    const answer = [];
    let left = 0;
    
    for(let i = 0; i < nums.length; i++) {
        while(max.length > 0 && nums[max[max.length - 1]] <= nums[i]) max.pop();
        max.push(i);

        if(left > max[0]) max.shift();
        if(i - left + 1 >= k) {
            answer.push(nums[max[0]]);
            left++;
        }
    }
    return answer;
};