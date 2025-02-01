function maxProfit(prices: number[]): number {
    let maxDiff = 0;
    let minPrice = Infinity;

    for(let i = 0; i < prices.length; i++) {
        maxDiff = Math.max(maxDiff, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxDiff;
};