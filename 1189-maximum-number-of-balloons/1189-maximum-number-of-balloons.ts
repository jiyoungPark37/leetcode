function maxNumberOfBalloons(text: string): number {
    const map = new Map();
    const ballon = new Set('balon');
    const sorted = text.trim().split('');

    sorted.forEach(ele => {
        if(ballon.has(ele)) {
            map.set(ele, (map.get(ele) ?? 0) + 1);
        }
    });
    if(map.size < ballon.size) return 0;

    let answer = Infinity;
    Array.from(map).forEach(([key,val]) => {
        if(key === 'l' || key === 'o') {
            answer = Math.min(answer, Math.floor(val / 2));
        } else {
            answer = Math.min(answer, val);
        }
    });
    if(answer === Infinity) return 0;
    return answer;
};