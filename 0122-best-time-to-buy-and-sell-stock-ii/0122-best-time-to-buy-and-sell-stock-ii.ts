function maxProfit(prices: number[]): number {
    const arr = Array(prices.length).fill(0);
    let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > minPrice) {
            arr[i] = arr[i-1] + prices[i] - minPrice;
            minPrice = prices[i];
        } else {
            minPrice = prices[i];
            arr[i] = arr[i-1];
        }
    }
    return arr[arr.length - 1];
};