function dailyTemperatures(temperatures: number[]): number[] {
    const arr = Array(temperatures.length).fill(0);
    const stack = [];

    for(let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];
        while(stack.length > 0 && stack[stack.length - 1][0] < temp) {
            const popped = stack.pop();
            arr[popped[1]] = i - popped[1];
        }
        stack.push([temp, i]);
    }
    return arr;
};