function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 1) return s.length;
    let start = 0;
    const set = new Set();
    let max = 0;

    for(let i = 0; i < s.length; i++) {
        while(set.has(s[i]) && start < i) {
            set.delete(s[start]);
            start+=1;
        }
        if(!set.has(s[i])) set.add(s[i]);
        if(max < set.size) max = set.size;
    }
    max = Math.max(max, set.size);
    return max;
};