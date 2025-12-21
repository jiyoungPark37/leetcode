class UnionFind {
    parent: number[];
    rank: number[];
    constructor(size: number){
        this.parent = Array.from({length: size}, (_, i) => i);
        this.rank = Array(size).fill(1);
    }

    find(node: number) {
        if(this.parent[node] !== node){
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(node1: number, node2: number) {
        const root1 =  this.find(node1);
        const root2 = this.find(node2);

        if(this.rank[root1] > this.rank[root2]) {
            this.parent[root2] = root1;
        } else if(this.rank[root1] < this.rank[root2]) {
            this.parent[root1] = root2;
        } else {
            this.parent[root2] = root1;
            this.rank[root1]++;
        }
    }
}
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const union = new UnionFind(n);

    edges.forEach(edge => union.union(edge[0], edge[1]));
    const root1 = union.find(source);
    const root2 = union.find(destination);
    return root1 === root2;
};