function dailyTemperatures(temperatures: number[]): number[] {
    const stack = [];
    const answer = Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
            const popped = stack.pop();
            const idx = popped[1];

            answer[idx] = i - idx;
        }
        stack.push([temperatures[i], i]);
    }
    return answer;
};