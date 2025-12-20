function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const arr = Array.from({length: n}, (_, idx) => idx);

    const find = (idx) => {
        if(arr[idx] === idx) return idx;
        return arr[idx] = find(arr[idx]);
    }
    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        if(rootA !== rootB) {
            arr[rootA] = rootB;
            return true;
        }
        return false;
    }
    for(const [a,b] of edges) {
        union(a,b);
    }
    if(find(arr[destination]) !== find(arr[source])) return false;
    return true;
};