function decodeString(s: string): string {
    const stack = [];
    for(const char of s) {
        if(char === ']') {
            let str = '';
            while(stack.length > 0 && stack[stack.length - 1] !== '[') {
                str = `${stack.pop()}${str}`;
            }
            stack.pop(); // '[' case
            let num = '';
            while(stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                num = `${stack.pop()}${num}`;
                console.log(num, 'num checking')
            }
            stack.push(str.repeat(Number(num)));
        } else stack.push(char);
    }
    return stack.join('');
};