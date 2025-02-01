const makeRange = (start: number, end: number):string => {
    return `${start}->${end}`;
}

function summaryRanges(nums: number[]): string[] {
    if(nums.length <= 0) return [];

    const answer: string[] = [];
    let start = 0;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1] + 1) {
            if(i-1 === start) answer.push(`${nums[start]}`);
            else {
                const range = makeRange(nums[start], nums[i-1]);
                 answer.push(range);
            }
            start = i;
        }
    }
    if(start !== nums.length - 1) {
        const range = makeRange(nums[start], nums[nums.length - 1]);
        answer.push(range);
    } else answer.push(`${nums[start]}`);
    return answer;
};