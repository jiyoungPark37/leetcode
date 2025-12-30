function isSubsequence(s: string, t: string): boolean {
    if(s.length > t.length) return false;
    let sIdx = 0;
    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[sIdx]) sIdx++;
    }
    if(sIdx === s.length) return true;
    return false;
};