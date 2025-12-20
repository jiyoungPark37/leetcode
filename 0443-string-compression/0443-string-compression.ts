function compress(chars: string[]): number {
    let count = 1;
    let answer = '';
    for(let i = 0; i < chars.length; i++) {
        const cur = chars[i];
        const next = chars[i+1];
        if(cur === next) {
            count++;
        } else {
            if(count > 1) answer+=`${cur}${count}`;
            else answer+=cur;
            count = 1;
        }
    }
    for(let i = 0 ; i < answer.length; i++) {
        chars[i] = answer[i];
    }
    return answer.length;
}