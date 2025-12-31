function wordPattern(pattern: string, s: string): boolean {
    const map = new Map();
    const set = new Set();
    const str = s.trim().split(/\s+/);
    if(pattern.length !== str.length) return false;
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if(map.has(char)) {
            if(map.get(char) !== pattern[i]) return false;
        } else {
            if(set.has(pattern[i])) return false;
            map.set(char, pattern[i]);
            set.add(pattern[i]);
        }
    }
    return true;
};