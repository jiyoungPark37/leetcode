class RandomizedSet {
    list;
    constructor() {
        this.list = new Set();
    }

    insert(val: number): boolean {
        if(this.list.has(val)) return false;
        this.list.add(val);
        return true;
    }

    remove(val: number): boolean {
        if(!this.list.has(val)) return false;
        this.list.delete(val);
        return true;
    }

    getRandom(): number {
        let len = this.list.size;
        const arr: number[] = Array.from(this.list);
        const random = Math.floor(Math.random() * 10) % len;
        return arr[random];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */