function minWindow(s: string, t: string): string {
    if(t.length > s.length) return '';
    if(s === t) return s;

    const need = new Map();
    const have = new Map();
    t.split('').forEach(str => need.set(str, (need.get(str) ?? 0) + 1));

    let count = need.size;
    let min = Infinity;
    let start = 0;
    let end = 0;

    let left = 0;
    for(let i = 0; i < s.length; i++) {
        have.set(s[i], (have.get(s[i]) ?? 0) + 1);
       if(need.get(s[i]) && have.get(s[i]) === need.get(s[i])) {
            count -= 1;
        }

        while (count === 0) {
            if(min > i - left + 1) {
                min = i - left + 1;
                start = left;
                end = i;
            }
            have.set(s[left], have.get(s[left]) - 1);
            if(need.get(s[left]) && have.get(s[left]) < need.get(s[left])) count+=1;
            left++;
        }
    }

    return min === Infinity ? '' : s.slice(start, end + 1);
};