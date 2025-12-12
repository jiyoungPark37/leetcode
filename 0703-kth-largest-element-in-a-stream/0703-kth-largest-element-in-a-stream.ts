class KthLargest {
    private heap:number[];
    private k:number;
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = nums.sort((a,b) => a - b);
    }

    add(val: number): number {
        let check = false;
        for(let i = 0; i < this.heap.length; i++) {
            const cur = this.heap[i];
            if(cur >= val) {
                check = true;
                this.heap = [...this.heap.slice(0, i), val, ...this.heap.slice(i)];
                break;
            }    
        }
        if(!check) this.heap.push(val);
        return this.heap[this.heap.length - this.k];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */