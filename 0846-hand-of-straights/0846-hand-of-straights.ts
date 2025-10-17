function isNStraightHand(hand: number[], groupSize: number): boolean {
    if(hand.length % groupSize !== 0) return false;

    const map = new Map();
    hand.forEach((ele) => {
        map.set(ele, (map.get(ele) ?? 0) + 1);
    });

    hand.sort((a,b) => a - b);
    for(let i = 0; i < hand.length; i++) {
        if(map.get(hand[i]) > 0) {
            const first = hand[i];
            map.set(first, map.get(first) - 1);
            if(map.get(first) === 0) map.delete(first);
            for(let j = 1; j < groupSize; j++) {
                if(!map.has(first + j)) return false;
                map.set(first + j, map.get(first + j) - 1);
                if(map.get(first + j) === 0) map.delete(first + j);
            }
        }
    }
    if(map.size > 0) return false;
    return true;
};