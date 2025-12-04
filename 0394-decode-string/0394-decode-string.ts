function decodeString(s: string): string {
    const stack = [];

    for(const ch of s) {
        if(ch === ']') {
            let letter = '';
            while(stack.length > 0 && stack[stack.length - 1] !== '[') {
                const popped = stack.pop();
                letter = `${popped}${letter}`;
            }
            stack.pop() // '['
            let num = '';
            while(stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                const popped = stack.pop();
                num = `${popped}${num}`;
            }
            const res = letter.repeat(Number(num));
            stack.push(res);
        } else stack.push(ch);
    }

    return stack.join('');
};