function characterReplacement(s: string, k: number): number {
    let idx = 0;
    const map = new Map();
    let max = 0;
    let answer = 0;

    for(let i = 0; i < s.length; i++) {
        const cur = map.get(s[i]) ?? 0;
        map.set(s[i], cur + 1);
        max = Math.max(max, cur + 1);
        while(idx < i && i - idx + 1 > max + k) {
            map.set(s[idx], map.get(s[idx]) - 1);
            idx++;
        }
        answer = Math.max(answer, i - idx + 1);
    }
    return answer;
};