function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 0) return s.length;
    const set = new Set().add(s[0]);
    let left = 0;
    let answer = 1;

    for(let right = 1; right < s.length; right++) {
        while(set.has(s[right]) && left <= right) {
            if(set.has(s[left])) set.delete(s[left]);
            left+=1;
        }
        set.add(s[right]);
        if(answer < set.size) answer = set.size;
    }
    if(answer < set.size) answer = set.size;
    return answer;
};