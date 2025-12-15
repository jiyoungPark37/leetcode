function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack = [];
    for(let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        while(stack.length > 0 && popped[0] === stack[stack.length - 1]) {
            stack.pop();
            popped.shift();
        }
    }
    if(popped.length > 0) return false;
    return true;
};