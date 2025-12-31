function simplifyPath(path: string): string {
    let answer = [];
    const paths = path.trim().split(/[/+]/).filter(Boolean);
    for(const str of paths) {
        if(str === '.') continue;
        if(str === '..') {
            if(answer.length > 0) answer.pop();
        } else {
            answer.push(str);
        }
    }
    return `/${answer.join('/')}`;
};