function findClosestNumber(nums: number[]): number {
    let minDiff = Infinity;
    let answer = 0;

    for(let i = 0; i < nums.length; i++) {
        const abs = Math.abs(nums[i]);
        if(minDiff >= abs) {
            if(minDiff === abs && nums[i] < answer) {
                continue;
            }
            answer = nums[i];
            minDiff = abs;
        }
    }
    return answer;
};