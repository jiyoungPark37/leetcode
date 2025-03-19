function productExceptSelf(nums: number[]): number[] {
    let pt = 1;
    const answer = new Array(nums.length).fill(1);

    for(let i = 0; i < nums.length; i++) {
        answer[i] = pt * answer[i];
        pt *= nums[i];
    }
    pt = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        answer[i] = pt * answer[i];
        pt *= nums[i];
    }
    return answer;
};