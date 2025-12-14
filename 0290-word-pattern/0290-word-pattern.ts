function wordPattern(pattern: string, s: string): boolean {
    const map = new Map();
    const arr = s.trim().split(/\s+/);
    const wordSet = new Set();
    if(pattern.length !== arr.length) return false;

    for(let i = 0; i < pattern.length; i++) {
        const word = arr[i];
        const key = pattern[i];
        if(map.has(key)) {
            if(map.get(key) !== word) return false;
        } else {
            if(wordSet.has(word)) return false;
            map.set(key, word);
            wordSet.add(word);
        }
    }
    return true;
};