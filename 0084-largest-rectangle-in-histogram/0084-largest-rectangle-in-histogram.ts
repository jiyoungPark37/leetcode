function largestRectangleArea(heights: number[]): number {
    const stack = [];
    let answer = 0;

    for(let i = 0; i < heights.length; i++) {
        let idx = i;
        while(stack.length > 0 && stack[stack.length - 1][0] > heights[i]) {
            const popped = stack.pop();
            answer = Math.max(answer, (i - popped[1]) * popped[0]);
            idx = Math.min(i, popped[1]);
        }
        stack.push([heights[i], idx]);
    };

    for(let i = 0; i < stack.length; i++) {
        answer = Math.max(answer, (heights.length - stack[i][1])*stack[i][0]);
    }
    return answer;
};