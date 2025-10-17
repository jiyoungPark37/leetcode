function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;

  hand.sort((a, b) => a - b);

  const map = new Map<number, number>();
  hand.forEach(ele => map.set(ele, (map.get(ele) ?? 0) + 1));

  for (let i = 0; i < hand.length; i++) {
    const curVal = hand[i];
    const cur = map.get(curVal);
    if (cur > 0) {
      for (let j = curVal; j < curVal + groupSize; j++) {
        const count = map.get(j);
        if (!count || count <= 0) return false;
        map.set(j, count - 1);
      }
    }
  }

  return true;
}