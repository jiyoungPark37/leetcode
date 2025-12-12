function dailyTemperatures(temperatures: number[]): number[] {
    const arr = Array(temperatures.length).fill(0);

    const stack = [];
    for(let i = 0; i < temperatures.length; i++) {
        const cur = temperatures[i];
        while(stack.length > 0 && stack[stack.length - 1][0] < cur) {
            const popped = stack.pop();
            const prevIdx = popped[1];
            arr[prevIdx] = i - prevIdx;
        }
        stack.push([cur, i]);
    }
    return arr;
};