class MinStack {
    stack: number[];
    minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        for(let i = 0; i < this.minStack.length; i++) {
            if(this.minStack[i] > val) {
                this.minStack = [...this.minStack.slice(0, i), val, ...this.minStack.slice(i)];
                break;
            }
        }
        if(this.minStack.length + 1 === this.stack.length) this.minStack.push(val);
    }

    pop(): void {
        const popped = this.stack.pop();
        for(let i = 0; i < this.minStack.length; i++) {
            if(this.minStack[i] === popped) {
                this.minStack = [...this.minStack.slice(0,i), ...this.minStack.slice(i+1)];
                break;
            }
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[0];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */