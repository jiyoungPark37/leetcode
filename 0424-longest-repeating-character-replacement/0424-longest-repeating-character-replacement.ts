function characterReplacement(s: string, k: number): number {
    const map = new Map();
    let max = 0;
    let left = 0;
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
        if(max < map.get(s[i])) max = map.get(s[i]);
        while(left < i && i - left + 1 > max + k) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }
        answer = Math.max(answer, i - left + 1);
    }
    return answer;
};