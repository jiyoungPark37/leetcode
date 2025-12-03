function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let answer = 0;
    let start = 0;
    for(let i = 0; i < s.length; i++) {
        const cur = s[i];
        while(set.has(cur)) {
            set.delete(s[start]);
            start++;
        }
        set.add(cur);
        if(i - start + 1 > answer) answer = i - start + 1;
    }
    return answer;
};