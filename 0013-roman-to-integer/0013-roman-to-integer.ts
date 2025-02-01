const ROMAN_SYMBOL = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanToInt(s: string): number {
    let answer = 0;

    for(let i = 0; i < s.length; ) {
        const cur = ROMAN_SYMBOL[s[i]];
        const next = i < s.length - 1 ? ROMAN_SYMBOL[s[i+1]] : undefined;
        if(!!next && cur < next) {
            answer += (next-cur);
            i+=2;
        } else {
            answer+= cur;
            i+=1;
        }
    }
    return answer;
};