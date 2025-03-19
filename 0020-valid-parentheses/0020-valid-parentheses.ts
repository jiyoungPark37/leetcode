const PARENTHESES = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
};

function isValid(s: string): boolean {
    if(s.length % 2 !== 0) return false;
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if(PARENTHESES[s[i]]) {
            stack.push(s[i]);
        } else {
            if(stack.length <= 0) return false;
            const popped = stack.pop();
            if(PARENTHESES[popped] !== s[i]) return false;
        }
    }
    if(stack.length > 0) return false;
    return true;
};