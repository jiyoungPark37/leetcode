function wordPattern(pattern: string, s: string): boolean {
    const map = new Map();
    const arr = s.trim().split(/\s+/);
    const set = new Set();
    if(pattern.length !== arr.length) return false;

    for(let i = 0; i < arr.length; i++) {
        const ptrn = pattern[i];
        const word = arr[i];
        if(map.has(ptrn)) {
            if(map.get(ptrn) !== word) return false;
        } else {
            if(set.has(word)) return false;
            set.add(word);
            map.set(ptrn, word);
        }
    }
    return true;
};