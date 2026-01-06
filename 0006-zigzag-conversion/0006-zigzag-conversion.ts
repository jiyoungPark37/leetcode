function convert(s: string, numRows: number): string {
    if(numRows <= 1 || numRows >= s.length) return s;

    const res: string[] = [];  
    const n = s.length;
    const cycle = (numRows - 1) * 2;

    for(let i = 0; i < numRows; i++) {
        for(let j = 0; i + j < n; j += cycle) {
            res.push(s[i + j]);
            if(i !== 0 && i !== numRows - 1) {
                const nextIdx = i + j + cycle - (i * 2);
                if(nextIdx < n) res.push(s[nextIdx]);
            }
        }
    }
    return res.join('');
}