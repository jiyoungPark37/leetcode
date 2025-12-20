class BrowserHistory {
    private curIdx:number;
    private history:string[];
    constructor(homepage: string) {
        this.history = [homepage];
        this.curIdx = 0;
    }

    visit(url: string): void {
        this.history = [...this.history.slice(0, this.curIdx+1), url];
        this.curIdx = this.history.length - 1;
    }

    back(steps: number): string {
        this.curIdx = Math.max(this.curIdx - steps, 0);
        return this.history[this.curIdx];
    }

    forward(steps: number): string {
        this.curIdx = Math.min(this.curIdx + steps, this.history.length - 1);
        return this.history[this.curIdx];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */