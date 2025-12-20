function removeDuplicates(s: string, k: number): string {
    const stack = [];

    for(const char of s) {
        if(stack.length > 0 && stack[stack.length - 1][0] === char) {
           stack[stack.length - 1][1] +=1;
           if(stack[stack.length - 1][1] === k) stack.pop();
        } else stack.push([char,1]);
    }
   return stack.map(([a,b]) => a.repeat(b)).join('');
};