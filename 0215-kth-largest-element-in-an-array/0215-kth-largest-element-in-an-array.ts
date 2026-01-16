class MaxHeap {
    heap: number[];
    maxLen: number;
    constructor(maxLen: number, arr: number[]) {
        this.heap = [];
        this.maxLen = maxLen;
        arr.forEach((ele) => this.add(ele));
    };

    add(val: number) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
        if(this.maxLen < this.heap.length) {
            this.removeMin();
        };
    };

    shiftUp(curIdx: number) {
        let parentIdx = Math.floor((curIdx - 1) / 2);
        while(this.heap[parentIdx] > this.heap[curIdx] && curIdx > 0) {
            [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }

    removeMin() {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.shiftDown(0);
    };

    shiftDown(idx: number) {
        let childIdx = 2 * idx + 1;
        let endIdx = this.heap.length - 1;
        while(childIdx <= endIdx) {
            let secondChildIdx = 2 * idx + 2;
            let swapIdx;
            if(secondChildIdx <= endIdx && this.heap[childIdx] > this.heap[secondChildIdx]) {
                swapIdx = secondChildIdx;
            } else swapIdx = childIdx;

            if(this.heap[swapIdx] < this.heap[idx]) {
                [this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[idx]];
                idx = swapIdx;
                childIdx = 2 * idx + 1;
            } else return;
        }
    }
}

function findKthLargest(nums: number[], k: number): number {
    const max = new MaxHeap(k, nums);
    return max.heap[0];
};