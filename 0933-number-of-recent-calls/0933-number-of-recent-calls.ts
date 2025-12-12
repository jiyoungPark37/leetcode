class RecentCounter {
    private stack: number[][];
    private start:number;
    private end: number;
    constructor() {
        this.stack = [];
        this.start = 0;
        this.end = 0;
    }

    ping(t: number): number {
        const range = [t-3000, t];
        while(this.stack.length > 0 && t-3000 > this.stack[0][1]) {
            this.stack.shift();
        }
        this.stack.push(range);
        return this.stack.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */