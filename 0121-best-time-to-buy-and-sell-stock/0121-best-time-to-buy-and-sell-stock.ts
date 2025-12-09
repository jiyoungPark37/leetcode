function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxCost = -Infinity;

    for(let i = 0; i < prices.length; i++) {
        const todayPrice = prices[i];
        minPrice = Math.min(minPrice, todayPrice);
        maxCost = Math.max(todayPrice - minPrice, maxCost);
    }
    return maxCost;
};