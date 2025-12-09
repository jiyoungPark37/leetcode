function longestConsecutive(nums: number[]): number {
    if(nums.length <= 1) return nums.length;
    nums.sort((a,b) => a - b);
    let count = 1;
    let answer = 1;
    let prev = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(prev === nums[i]) continue;
        if(prev + 1 === nums[i]) {
            count++;
        } else {
            if(answer < count) answer = count;
            count = 1;
        }
        prev = nums[i];
    }
    answer = Math.max(answer, count);
    return answer;
};