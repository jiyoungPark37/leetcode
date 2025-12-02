class MinStack {
    private stack: number[];
    private minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val:number) {
        this.stack.push(val);

        const curMin = this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : Infinity;
        if(curMin >= val) {
            this.minStack.push(val);
        }
    }
    pop() {
        if(this.stack.length === 0) return;

        const popped = this.stack.pop();
        const min = this.getMin();
        if(min && min === popped) {
            this.minStack.pop();
        }
    }
    top() {
        if(this.stack.length === 0) return;
        return this.stack[this.stack.length - 1];
    }
    getMin(){
        if(this.minStack.length === 0) return;
        return this.minStack[this.minStack.length - 1];
    }
}
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const minStack = new MinStack();
    for(let i = 0; i < pushed.length; i++) {
        minStack.push(pushed[i]);
        while(popped.length > 0 && minStack.top() === popped[0]) {
            popped.shift();
            minStack.pop();
        }
    }
    while(popped.length > 0 && minStack.top() && minStack.top() === popped[0]) {
        popped.shift();
        minStack.pop();
    }
    if(popped.length > 0) return false;
    return true;
};