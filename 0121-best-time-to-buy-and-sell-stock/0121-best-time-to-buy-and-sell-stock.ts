function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(const price of prices) {
        if(minPrice > price) minPrice = price;
        if(maxProfit < price - minPrice) maxProfit = price - minPrice;
    }
    return maxProfit;
};