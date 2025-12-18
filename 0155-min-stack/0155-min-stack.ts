class MinStack {
    private stack:number[];
    private minStack:number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        const min = this.getMin() ?? Infinity;
        if(min >= val) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        if(this.stack.length === 0) return;
        const pop = this.stack.pop();
        if(pop === this.getMin()) {
            this.minStack.pop();
        }        
    }

    top(): number {
        if(this.stack.length === 0) return;
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        if(this.minStack.length === 0) return;
        return this.minStack[this.minStack.length - 1];  
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