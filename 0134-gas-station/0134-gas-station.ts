function canCompleteCircuit(gas: number[], cost: number[]): number {
    let tank = 0;
    let totalTank = 0;
    let startIdx = 0;
    for(let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];
        tank+=diff;
        totalTank+=diff;
        if(tank < 0) {
            tank = 0;
            startIdx=i+1;
        }
    }
    return totalTank < 0 ? -1 : startIdx;
};