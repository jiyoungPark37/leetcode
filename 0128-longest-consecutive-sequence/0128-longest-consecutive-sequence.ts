function longestConsecutive(nums: number[]): number {
    nums.sort((a,b) => a - b);
    let count = 1;
    let answer = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) continue;
        if(nums[i]+1 === nums[i+1]) count+=1;
        else {
            if(answer < count) answer = count;
            count=1;
        }
    }
    return answer;
};