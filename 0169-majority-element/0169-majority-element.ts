function majorityElement(nums: number[]): number {
    nums.sort((a,b) => a - b);
    const max = Math.ceil(nums.length / 2);

    let count = 0;
    let prev = Infinity;
    for(const n of nums) {
        if(prev !== n) {
            prev = n;
            count = 1;
        } else {
            count+=1;
            if(count >= max) return n;
        }
    }
    return prev;
};