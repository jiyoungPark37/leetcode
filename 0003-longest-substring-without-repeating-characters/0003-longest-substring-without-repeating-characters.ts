function lengthOfLongestSubstring(s: string): number {
    let idx = 0;
    const set = new Set();
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        while(set.has(s[i])) {
            set.delete(s[idx]);
            idx++;
        }
        set.add(s[i]);
        if(answer < set.size) answer = set.size;
    }
    return answer;
};