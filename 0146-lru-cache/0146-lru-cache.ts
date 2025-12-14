class LRUCache {
    private capacity: number;
    private map: Map<number, number>;
    constructor(capacity: number) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        const val = this.map.get(key);
        if(val == undefined) return -1;

        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    put(key: number, value: number): void {
        if(this.map.size>=this.capacity && !this.map.has(key)) {
            this.map.delete(this.map.keys().next().value);
        }
        this.map.delete(key);
        this.map.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */