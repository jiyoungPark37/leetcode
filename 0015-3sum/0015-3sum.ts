function threeSum(nums: number[]): number[][] {
    const answer = [];
    const set = new Set();
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        while(start < end) {
            const key = `${nums[i]}-${nums[start]}-${nums[end]}`;
            const sum = nums[i] + nums[start] + nums[end];
            if(sum === 0 && !set.has(key)) {
                set.add(key);
                answer.push([nums[i], nums[start], nums[end]])
            }
            if(sum >= 0) end-=1;
            else start+=1;
        }
    }
    return answer;
};