function plusOne(digits: number[]): number[] {
    const answer = [];
    digits[digits.length - 1]+=1;

    let prev = 0;
    for(let i = digits.length - 1; i >= 0; i--) {
        let cur = prev + digits[i];
        if(cur >= 10) {
            prev = 1;
            cur-=10;
        } else prev = 0;
        answer.unshift(cur);
    }
    if(prev > 0) answer.unshift(prev);
    return answer;
};