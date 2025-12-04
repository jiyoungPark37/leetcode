function compress(chars: string[]): number {
    let str = [];
    let count = 1;
    for(let i = 0; i < chars.length; i++) {
        const ch = chars[i];
        const next = chars[i+1];
        if(ch === next) {
            count++
        } else {
            if(count === 1) str.push(ch);
            else str.push(`${ch}${count}`);
            count = 1;
        }
    }
    const total = str.join('').split('');

    for(let i = 0; i < total.length; i++) {
        if(total[i] === chars[i]) continue;
        chars[i] = total[i];
    }
    return total.length;
};