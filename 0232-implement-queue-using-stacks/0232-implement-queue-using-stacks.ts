class MyQueue {
    private queue:number[];
    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        const first = this.queue.shift();
        return first;
    }

    peek(): number {
        if(this.queue.length === 0) return -1;
        return this.queue[0];
    }

    empty(): boolean {
        if(this.queue.length === 0) return true;
        return false;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */