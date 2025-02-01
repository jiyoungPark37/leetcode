function isSubsequence(s:string, t: string): boolean {
    if(s.length >= t.length) return s === t;

    let idx = 0;
    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[idx]) {
            idx+=1;
            if(idx === s.length) return true;
        }
    }
    return idx === s.length;
};