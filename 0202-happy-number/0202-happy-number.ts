function isHappy(n: number): boolean {
    const set = new Set();

    let cur = n;
    while(!set.has(cur)) {
        if(cur === 1) return true;
        set.add(cur);
        cur = String(cur).split('').reduce((acc, cur) => {
            console.log(acc, 'acc', cur, 'cur');
            acc+=Number(cur) * Number(cur);
            return acc;
        }, 0);
    }
    if(cur === 1) return true; 
    return false;
};