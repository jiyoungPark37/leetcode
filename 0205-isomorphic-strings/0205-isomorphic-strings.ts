function isIsomorphic(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    const map = new Map();
    const taken = new Set();
    for(let i = 0; i < s.length; i++) {
        if(!map.has(s[i])) {
            if(!taken.has(t[i])) {
                map.set(s[i], t[i]);
                taken.add(t[i]);
            } else return false;
        } else {
            if(map.get(s[i]) !== t[i]) return false;
        }
    }
    return true;
};