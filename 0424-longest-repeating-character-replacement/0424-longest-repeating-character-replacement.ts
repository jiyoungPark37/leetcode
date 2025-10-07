function characterReplacement(s: string, k: number): number {
    if(s.length <= 1) return s.length;
    let answer = 0;
    let max = 0;
    let left = 0;
    const map = new Map();

    for(let i = 0; i < s.length; i++) {
        map.set(s[i], ((map.get(s[i]) ?? 0) + 1));
        if(map.get(s[i]) > max) max = map.get(s[i]);

        if(max + k < i - left + 1) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        if(answer < i - left + 1) answer = i - left + 1;
    }
    return answer;
};