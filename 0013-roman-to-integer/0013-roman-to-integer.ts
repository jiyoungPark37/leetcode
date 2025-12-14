const ROMAN_SYMBOL = {
    'I': 1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
}
const REPLACE = {
    'I': ['V', 'X'],
    'X': ['L', 'C'],
    'C': ['D','M'],
}
function romanToInt(s: string): number {
    let answer = 0;

    for(let i = 0; i < s.length; i++) {
        const cur = ROMAN_SYMBOL[s[i]];
        if(['I', 'X', 'C'].includes(s[i]) && REPLACE[s[i]].includes(s[i+1])) {
            const next = ROMAN_SYMBOL[s[i+1]];
            answer += (next-cur);
            i+=1;
        } else answer+= cur;
    }
    return answer;
};