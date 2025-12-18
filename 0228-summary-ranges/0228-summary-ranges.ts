const convertToString = (a:number, b?:number) => {
    if(a === b || b === undefined) return `${a}`;
    return `${a}->${b}`;
} 
function summaryRanges(nums: number[]): string[] {
    const answer = [];

    let start = nums[0];
    for(let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const next = nums[i+1];
        if(cur+1 === next || cur === next) continue;
        else {
            answer.push(convertToString(start, cur));
            start = next;
        }
    }
    return answer;
};