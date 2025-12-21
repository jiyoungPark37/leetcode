function isHappy(n: number): boolean {
    const set = new Set();
    let trackingNum = n;

    while(true) {
        trackingNum = String(trackingNum).split('').reduce((acc, cur) => Number(cur) * Number(cur) + acc, 0);
        if(trackingNum === 1) return true;
        if(set.has(trackingNum)) return false;
        set.add(trackingNum);
    }
    return false;
};