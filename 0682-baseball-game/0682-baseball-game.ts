function calPoints(operations: string[]): number {
    const stack = [];

    for(const pt of operations) {
        const num = Number(pt);
        if(!Number.isNaN(num)) {
            stack.push(num);
            continue;
        } 
        if(pt === 'C') {
            stack.pop();
        } else if(pt === 'D') {
            if(stack.length > 0) {
                const first = stack[stack.length - 1];
                stack.push(first * 2);
            }
        } else if(pt === '+') {
            if(stack.length > 1) {
                const first = stack[stack.length - 2];
                const second = stack[stack.length - 1];
                stack.push(first + second);
            }
        }
    }
    let answer = 0;
    for(const pt of stack) {
        answer += pt;
    }
    return answer;
};