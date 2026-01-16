function myAtoi(s: string): number {
    const str = s.trim();
    const max = Math.pow(2,31) - 1;
    const min = Math.pow(-2,31);

    let num = 0;
    let sign = str[0] === '-' ? -1 : 1;
    const hasSign = str[0] === '+' || str[0] === '-';
    const startIdx = hasSign ? 1 : 0;
    for(let i = startIdx; i < str.length; i++) {
        const n = str[i];
        if(!/[0-9]/.test(n)) break;
        num = num * 10 + n.charCodeAt(0) - '0'.charCodeAt(0);
        if(sign * num >= max) return max;
        if(sign * num <= min) return min;
    }
    return sign * num;
};