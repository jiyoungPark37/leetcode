function wordPattern(pattern: string, s: string): boolean {
    const arr = s.split(' ');
    const map = new Map();
    const set = new Set();
    if(arr.length !== pattern.length) return false;

    for(let i = 0; i < pattern.length; i++) {
        if(map.has(pattern[i])) {
            if(map.get(pattern[i]) !== arr[i]) return false;
        } else {
            if(set.has(arr[i])) return false;
            map.set(pattern[i], arr[i]);
            set.add(arr[i]);
        }
    }
    return true;
};