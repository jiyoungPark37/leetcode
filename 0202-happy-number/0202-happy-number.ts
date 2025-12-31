function isHappy(n: number): boolean {
    let cur = n;
    const map = new Map();
    map.set(1, true);
    map.set(2, false);
    while(cur > 1) {
        const str = String(cur);
        let sum = 0;
        for(let i = 0; i < str.length; i++) {
            sum+=Number(str[i]) * Number(str[i]);
        }
        if(map.has(sum)) return map.get(sum);
        map.set(sum, false);
        cur = sum;
    }
    return true;
};