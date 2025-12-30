function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let idx = 0;
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        while(set.has(s[i])) {
            set.delete(s[idx]);
            idx++;
        }
        answer = Math.max(answer, i - idx + 1);
        set.add(s[i]);
    }
    return answer;
};