function jump(nums: number[]): number {
    let left = 0;
    let right = 0;
    let answer = 0;

    while(right < nums.length - 1) {
        let farthest = 0;
        for(let i = left; i <= right; i++) {
            farthest = Math.max(farthest, nums[i]+i);
        };
        left = right + 1;
        right = farthest;
        answer++;
    };
    return answer;
};