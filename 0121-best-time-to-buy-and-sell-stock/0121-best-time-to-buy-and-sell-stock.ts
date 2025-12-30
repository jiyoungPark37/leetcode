function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = Infinity;
    for(const price of prices) {
        minPrice = Math.min(price, minPrice);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
};