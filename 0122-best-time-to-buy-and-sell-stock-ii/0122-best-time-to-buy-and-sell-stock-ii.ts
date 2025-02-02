function maxProfit(prices: number[]): number {
    let diff = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] > prices[i-1]) diff+=(prices[i] - prices[i-1]);
    }
    return diff;
};