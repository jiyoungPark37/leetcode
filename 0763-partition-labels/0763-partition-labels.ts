function partitionLabels(s: string): number[] {
    let set = new Set();
    const map = new Map();
    const answer = [];
    let max = 0;
    
    s.split('').forEach(ele => map.set(ele, (map.get(ele) ?? 0) + 1));
    let start = 0;
    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) {
            max-=1;
            if(max === 0) {
                answer.push(i - start + 1);
                start = i + 1;
                set = new Set();
            } 
        } else {
            set.add(s[i]);
            if(max !== 0) {
                max+=map.get(s[i]) - 1;
            } else {
                max = map.get(s[i]) - 1;
            }
        }
    }
    return answer;
};