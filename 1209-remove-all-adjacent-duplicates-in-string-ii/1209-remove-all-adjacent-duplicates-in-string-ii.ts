function removeDuplicates(s: string, k: number): string {
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if(stack.length > 0 && stack[stack.length - 1][0] === s[i]) {
            const [char, count] = stack.pop();
            if(count + 1 !== k) stack.push([char, count + 1]);
        } else stack.push([s[i], 1]);
    }
    return stack.map(([char, count]) => char.repeat(count)).join('');
};