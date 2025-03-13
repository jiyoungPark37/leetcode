const convertAnswer = (a: number, b: number) => {
    return `${a}->${b}`;
}
function summaryRanges(nums: number[]): string[] {
    if(nums.length <= 0) return [];
    const answer = [];
    let start = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i-1] + 1) {
            if(nums[i-1] === nums[start]) answer.push(`${nums[start]}`);
            else answer.push(convertAnswer(nums[start], nums[i-1]));
            start = i;
        }
    }
    if(start !== nums.length - 1) answer.push(convertAnswer(nums[start], nums[nums.length-1]));
    else answer.push(`${nums[nums.length - 1]}`);
    return answer;
};