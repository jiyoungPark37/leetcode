function coinChange(coins: number[], amount: number): number {
    const arr = Array(amount + 1).fill(Infinity);
    arr[0] = 0;
    for(const coin of coins) {
        for(let i = coin; i <= amount; i++) {
            console.log(arr, 'arr check', i, 'itracking')
            arr[i] = Math.min(arr[i-coin] + 1, arr[i]);
        }
    }
    return arr[amount] === Infinity ? -1 : arr[amount];
};