function evalRPN(tokens: string[]): number {
    const stack = [];
    let answer = 0;

    for(let i = 0; i < tokens.length; i++) {
        const num = Number(tokens[i]);
        if(!Number.isNaN(num)) stack.push(num);
        else {
            let right = stack.pop();
            let left = stack.pop();
            if(tokens[i] === '+') stack.push(right + left);
            if(tokens[i] === '/') stack.push(Math.trunc(left / right));
            if(tokens[i] === '-') stack.push(left - right);
            if(tokens[i] === '*') stack.push(left * right);
        }
    }
    return stack[0];
}; 