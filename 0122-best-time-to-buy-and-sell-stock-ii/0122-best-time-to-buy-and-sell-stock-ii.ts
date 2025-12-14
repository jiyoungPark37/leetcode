function maxProfit(prices: number[]): number {
    const arr = Array(prices.length).fill(0);
    let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
        const price = prices[i];
        arr[i] = arr[i-1] + Math.max(price - minPrice, 0);
        minPrice = price;
    }
    return arr[arr.length - 1];
};