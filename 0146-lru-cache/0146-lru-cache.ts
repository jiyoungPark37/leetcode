class LRUCache {
    private capacity:number;
    private map: Map<number, number> = new Map();
    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        const val = this.map.get(key);
        if(val === undefined) return -1;
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    put(key: number, value: number): void {
        if(!this.map.has(key) && this.map.size >= this.capacity) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
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