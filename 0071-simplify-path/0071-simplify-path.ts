function simplifyPath(path: string): string {
    let answer = [];
    const splitted = path.split('/').filter(Boolean);
    for(const str of splitted) {
        if(str.includes('.')) {
            if(str.length === 1) continue;
            else if(str.length === 2) {
                const isEveryDot = str.split('').every(ele => ele === '.');
                if(isEveryDot) answer.length > 0 && answer.pop();
                else answer.push(str);
            } else answer.push(str);
        } else answer.push(str);
    }
    if(answer.length === 0) return '/';
    return `/${answer.join('/')}`
};  