class LRUCache {
    private map: Map<number,number> = new Map();
    private capacity: number;
    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        const map = this.map;
        if(!map.has(key)) return -1;
        const ans = map.get(key);
        this.put(key, ans);
        return ans;
    }

    put(key: number, value: number): void {
        const map = this.map;
        if(map.has(key)) {
            map.delete(key);
            map.set(key, value);
        } else {
            if(map.size >= this.capacity) {
                const firstKey = Array.from(map.keys())[0];
                map.delete(firstKey);
            }
            map.set(key, value);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */