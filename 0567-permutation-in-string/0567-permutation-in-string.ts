function checkInclusion(s1: string, s2: string): boolean {
    if(s1.length > s2.length) return false;
    let map = new Map();
    s1.split('').forEach(ele => map.set(ele, (map.get(ele) ?? 0) + 1));
    let left = 0;

    for(let i = 0; i < s2.length; i++) {
        if(map.get(s2[i]) > 0) {
            map.set(s2[i], map.get(s2[i]) - 1);
            if(i - left + 1 === s1.length) return true;
        } else {
            while(left <= i) {
                if(map.get(s2[i]) > 0) break;
                if(map.has(s2[left])) map.set(s2[left], map.get(s2[left]) + 1);
                left++;
            }
            if(map.get(s2[i]) > 0) map.set(s2[i], map.get(s2[i]) - 1);
        }
    }
    return false;
};