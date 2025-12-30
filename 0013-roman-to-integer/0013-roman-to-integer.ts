const ROMAN_DIGIT = {
    'I':1,
    'IV':4,
    'V':5,
    'IX':9,
    'X':10,
    'XL':40,
    'L':50,
    'XC':90,
    'C':100,
    'CD':400,
    'D':500,
    'CM': 900,
    'M':1000,
}
function romanToInt(s: string): number {
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        const cur = s[i];
        const next = s[i+1];
        if(ROMAN_DIGIT[cur]) {
            const key = `${cur}${next}`
            if(ROMAN_DIGIT[key]) {
                answer+=ROMAN_DIGIT[key];
                i++;
            } else {
                answer+=ROMAN_DIGIT[cur];
            }
        }
    }
    return answer;
};