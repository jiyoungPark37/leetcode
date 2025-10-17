function canCompleteCircuit(gas: number[], cost: number[]): number {
    let res = 0;
    let distance = 0;

    if(gas.reduce((a,b) => a + b, 0) - cost.reduce((a,b) => a + b, 0) < 0) return -1;
    
    for(let i = 0; i < gas.length; i++){
        distance += gas[i] - cost[i];
        if(distance < 0) {
            distance = 0;
            res = i + 1;
        }
    };
    return res;
};