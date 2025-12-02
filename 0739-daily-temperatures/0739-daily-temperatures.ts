class MinStack {
    private stack: number[][];
    private minStack: number[][];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number[]) {
        this.stack.push(val);

        const currentMin = this.minStack.length >  0 ? this.minStack[this.minStack.length - 1][0] : Infinity;
        if(currentMin >= val[0]) {
            this.minStack.push(val);
        }
    }

    pop() {
        if(this.stack.length <= 0) return;
        const popped = this.stack.pop();

        if(this.minStack.length > 0 && this.minStack[this.minStack.length - 1][0] === popped[0]) {
            this.minStack.pop();
        }
        return popped;
    }
    getMin() {
        if(this.minStack.length === 0) return;
        return this.minStack[this.minStack.length - 1][0];
    }
    top() {
        if(this.stack.length === 0) return;
        return this.stack[this.stack.length - 1][0];
    }
}
function dailyTemperatures(temperatures: number[]): number[] {
    const minStack = new MinStack();
    const arr = Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {
        const cur = temperatures[i];
        while (minStack.getMin() && minStack.getMin() < cur) {
            const popped = minStack.pop();
            const diff = i - popped[1];
            arr[popped[1]] = diff;
        } 
        minStack.push([cur, i]);
    }
    return arr;
};