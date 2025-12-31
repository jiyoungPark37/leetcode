/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    if(node === null) return null;

	const map = new Map();
    const clonedNode = new _Node(node.val);
    const queue = [node];
    map.set(node, clonedNode);
    while(queue.length > 0) {
        const original = queue.shift();
        const cloned = map.get(original);
        for(const neighbor of original.neighbors) {
            if(!map.has(neighbor)) {
                const newNeighbor = new _Node(neighbor.val);
                map.set(neighbor, newNeighbor);
                queue.push(neighbor);
            }
            cloned.neighbors.push(map.get(neighbor));
        }
    }
    return clonedNode;
};