function canCompleteCircuit(gas: number[], cost: number[]): number {   
    let tank = 0;
    let totalTank = 0;
    let idx = 0;

    for(let i = 0; i < gas.length; i++) {
        const total = gas[i] - cost[i];
        totalTank+=total;
        tank+=total;
        if(tank < 0) {
            idx = i + 1;
            tank = 0;
        }
    }  
    return totalTank < 0 ? -1 : idx;
};