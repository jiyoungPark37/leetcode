function minWindow(s: string, t: string): string {
    if(t.length > s.length) return '';
    if(s === t) return t;

    const tracking = new Map();
    t.split('').forEach(ele => tracking.set(ele, (tracking.get(ele) ?? 0) + 1));

    let left = 0;
    let min = Infinity;
    let count = 0;
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        //  console.log('----------', s[i], '----------')
        if(tracking.has(s[i])) {
            tracking.set(s[i], tracking.get(s[i]) - 1);
            // console.log(tracking, 'traking')
            if(tracking.get(s[i]) === 0) {
                count += 1;
                // console.log(count, 'count')
                while(count === tracking.size) {
                    if(i - left + 1 < min) {
                        min = i - left + 1;
                        answer = s.slice(left, i + 1);
                    //    console.log(left, i, 'i and left', s.slice(left, i+1))
                    };
                    // console.log(min, 'min', answer, 'answer');
                    if(tracking.has(s[left])) {
                        tracking.set(s[left], tracking.get(s[left]) + 1);
                        if(tracking.get(s[left]) > 0) count-=1;
                    } 
                    // console.log(tracking, 'tracking in left', s[left], left, 'left s[left]', count, 'count')
                    left++;
                }
            }
        }
    }
    return answer;
};