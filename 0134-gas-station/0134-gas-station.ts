function canCompleteCircuit(gas: number[], cost: number[]): number {
    let start = 0;
    let totalDiff = 0;
    let tank = 0;

    for(let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];
        tank += diff;
        totalDiff += diff;
        if(tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    return totalDiff < 0 ? -1 : start;
};