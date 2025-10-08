function minEatingSpeed(piles: number[], h: number): number {
    let max = Math.max(...piles);
    let min = 1;
    if(piles.length >= h) return max;

    const eating = (mid: number) => {
        let sum = 0;
        for(let i = 0; i < piles.length; i++) {
            sum += Math.ceil(piles[i]/ mid);
            if(sum > h) return h+1;
        }
        return sum;
    };
    while(min < max) {
        const mid = Math.floor((min + max) / 2);
        const res = eating(mid);
        if(res > h) min = mid + 1;
        else max = mid;
    }

    return max;
};