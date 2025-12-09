function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 0) return 0;
    let maxLen = 0;
    const set = new Set();
    let idx = 0;

    for(let i = 0; i < s.length; i++) {
        maxLen = Math.max(maxLen, set.size);
        while(set.has(s[i]) && idx < i) {
            set.delete(s[idx]);
            idx+=1;
        }
        set.add(s[i]);
    }
    maxLen = Math.max(maxLen, set.size);
    return maxLen;
};