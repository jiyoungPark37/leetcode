function numJewelsInStones(jewels: string, stones: string): number {
    const set = new Set();
    jewels.split('').forEach(ele => {
        if(!set.has(ele)) set.add(ele);
    })

    let answer = 0;
    for(let i = 0; i < stones.length; i++) {
        if(set.has(stones[i])) answer+=1;
    }
    return answer;
};