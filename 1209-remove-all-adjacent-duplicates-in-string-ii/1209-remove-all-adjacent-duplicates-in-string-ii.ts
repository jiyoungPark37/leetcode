function removeDuplicates(s: string, k: number): string {
    const stack = [];

    for(const char of s) {
        if(stack.length > 0 && stack[stack.length - 1][0] === char) {
            if(stack[stack.length - 1][1] + 1 === k) {
                while(stack.length > 0 && stack[stack.length - 1][0] === char) stack.pop();
            } else {
                const prevCount = stack[stack.length - 1][1] + 1;
                stack.push([char, prevCount]);
            }
        } else stack.push([char,1]);
    }
   return stack.map(([a,b]) => a).join('');
};