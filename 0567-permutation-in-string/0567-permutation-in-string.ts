function checkInclusion(s1: string, s2: string): boolean {
    const map = new Map();
    for(const ch of s1) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }

    let left = 0;
    for(let i = 0; i < s2.length; i++) {
        while(left <= i) {
            if(map.get(s2[i]) > 0) break;
            if(map.has(s2[left])) map.set(s2[left], (map.get(s2[left]) ?? 0) + 1);
            left++; 
        }
        if(map.has(s2[i])) {
            if(i - left + 1 === s1.length) return true; 
            map.set(s2[i], map.get(s2[i]) - 1);
        }
    }
    return false;
};