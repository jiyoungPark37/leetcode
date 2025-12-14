function change(amount: number, coins: number[]): number {
    const arr = Array(amount + 1).fill(0);
    arr[0] = 1;
    for(const coin of coins) {
        for(let i = coin; i <= amount; i++) {
            arr[i] = arr[i-coin] + arr[i];
        }
    }
    return arr[amount];
};